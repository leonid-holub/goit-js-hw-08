// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const fatherOfGallery = document.querySelector('div.gallery');

console.log(fatherOfGallery);

const listOfGalleryItems = () => {
  galleryItems.map(item => {
    item = `<a class="gallery__item" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}" /></>`;
    fatherOfGallery.insertAdjacentHTML('beforeend', item);
  });
};
listOfGalleryItems();

new SimpleLightbox(`.gallery__item`, {
  captionsData: 'alt',
  captionDelay: 250,
});
