// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);

const divRef = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
const listGalery = `<ul>${cardsMarkup}</ul>`;
divRef.insertAdjacentHTML('beforeend', listGalery);

const lightboxSettings = {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
};

function createGalleryCardsMarkup(imgages) {
  return imgages
    .map(({ preview, original, description }) => {
      return `
        <li>
          <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
  `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', lightboxSettings);
