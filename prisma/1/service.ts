// Опишите схему базы данных для следующего приложения:
// Требуется создать приложение для инвентаризации товаров на складах.
// Параметры товара: 
//  sku - уникальное поле.
//  title - наименование товара.
// Параметры категории товара:
// slug - уникальное поле.
// title - наименование склада
// Параметры склада:
// uuid - уникальное поле.
// title - наименование склада
// Товары хранятся на складах в определенном количестве.
// Каждый продукт может относится к нескольким категориям.
  
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newProduct = await prisma.product.create({
    data: {
      sku: 'SKU12345',
      title: 'Sample Product',
      categories: {
        connect: { slug: 'category-slug' },
      },
      stocks: {
        create: { 
          quantity: 100,
          warehouse: {
            connect: { uuid: 'warehouse-uuid' }
          }
        }
      }
    },
  });
  console.log('Created new product:', newProduct);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
