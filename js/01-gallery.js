import { galleryItems } from './gallery-items.js';
// Change code below this line


// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryListEl = document.querySelector('.gallery');
let instance = null;

let itemsMarkup = galleryItems.map(item => {
return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  }).join("");

galleryListEl.insertAdjacentHTML("beforeend", itemsMarkup);


// Реалізація делегування на ul.gallery і отримання url великого зображення.


function onItemClick(event) {
    event.preventDefault();
     if (event.target.nodeName !== "IMG") {
    return;
     }
    const originalImageLink = event.target.dataset.source;

    instance = basicLightbox.create(`
    <img src="${originalImageLink}" width="800" height="600">`, {
        onShow: () => {document.addEventListener('keydown', handleKeyDown)},
        onClose: () => {document.removeEventListener('keydown', handleKeyDown)},
    })
    instance.show();
}

function handleKeyDown(event) {
    if (event.key === 'Escape') {
        instance.close();
    }
}

galleryListEl.addEventListener('click', onItemClick);
