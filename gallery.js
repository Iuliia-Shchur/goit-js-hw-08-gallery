import galleryItems from "./app.js"

const refs = {
galleryList: document.querySelector('.js-gallery'),
lightbox: document.querySelector('.js-lightbox'),
lightbox__overlay: document.querySelector('.lightbox__overlay'),
lightbox__content: document.querySelector('.lightbox__content'),
lightbox__image: document.querySelector('.lightbox__image'),
lightbox__button: document.querySelector('.lightbox__button'),
};

const galleryMarkup = createGallery(galleryItems);
refs.galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery (items) {
return items.map(({preview, original, description}) => {
    return `
<li class="gallery__item">
  <a class="gallery__link"
    href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</li>
`;
})
.join('');

};
console.log(createGallery(galleryItems));

function  lightboxToggle (e) {
  e.preventDefault();
refs.lightbox.classList.toggle('is-open');

}

refs.galleryList.addEventListener('click', lightboxToggle)
refs.lightbox__button.addEventListener('click', lightboxToggle)