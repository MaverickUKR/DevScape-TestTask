// Напишите сервис который реализует следующие методы:
// получить общее количество всех товаров на всех складах,
// получить товары на определенном складе,
// получить количество товара на всех складах,
// получить количество товара на определенном складе,
// получить количество продуктов по категории,
// получить количество продуктов на определенном складе по категории.
// Пример: export const countAllProducts = () => {};
// export const countAllProductsOnStock = (uuid: string) => {};
// export const countProduct = (sku: string) => {};
// export const countProductOnStock = (uuid: string, sku: string) => {};
// export const countProductByCategory = (slug: string) => {};
// export const countProductOnStockByCategory = (uuid: string, slug: string) => {};

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const countAllProducts = async () => {
  return await prisma.stock.aggregate({
    _sum: {
      quantity: true,
    },
  });
};

export const countAllProductsOnStock = async (uuid) => {
  return await prisma.stock.findMany({
    where: { warehouse: { uuid } },
    include: { product: true },
  });
};

export const countProduct = async (sku) => {
  const product = await prisma.product.findUnique({ where: { sku } });
  return await prisma.stock.aggregate({
    where: { productId: product.id },
    _sum: {
      quantity: true,
    },
  });
};

export const countProductOnStock = async (uuid, sku) => {
  const product = await prisma.product.findUnique({ where: { sku } });
  return await prisma.stock.findMany({
    where: {
      productId: product.id,
      warehouseId: { uuid },
    },
  });
};

export const countProductByCategory = async (slug) => {
  const category = await prisma.category.findUnique({ where: { slug } });
  return await prisma.product.count({
    where: {
      categories: {
        some: { id: category.id },
      },
    },
  });
};

export const countProductOnStockByCategory = async (uuid, slug) => {
  const category = await prisma.category.findUnique({ where: { slug } });
  return await prisma.stock.findMany({
    where: {
      warehouseId: uuid,
      product: {
        categories: {
          some: { id: category.id },
        },
      },
    },
    include: {
      product: true,
    },
  });
};
