// Написать метод getBase64FromUrl который конвертирует картинку в строку base64 (метод должен быть реализован с помощью Promise). Пример:

//  getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
//  .then(console.log)
//  .catch(console.error)

// // Output
// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACeCAIAAADL6SW3AAAAA3NCSVQICAjb4U/gAAAMGElEQVR4nO3dfZBdZX3A8d....

function getBase64FromUrl(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.blob();
    })
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );
}

getBase64FromUrl(
  "https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8"
)
  .then(console.log)
  .catch(console.error);
