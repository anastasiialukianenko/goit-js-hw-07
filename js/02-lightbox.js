import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryListEl = document.querySelector('.gallery');


let itemsMarkup = galleryItems.map(item => {
return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</li>`
  }).join("");

galleryListEl.insertAdjacentHTML("beforeend", itemsMarkup);


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    disableScroll: false,
});


