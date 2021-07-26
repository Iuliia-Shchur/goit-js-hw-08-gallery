import galleryItems from "./app.js"

const refs = {
galleryList: document.querySelector('.js-gallery'),
lightbox: document.querySelector('.js-lightbox'),
lightbox__overlay: document.querySelector('.lightbox__overlay'),
lightbox__content: document.querySelector('.lightbox__content'),
lightbox__image: document.querySelector('.lightbox__image'),
lightbox__button: document.querySelector('.lightbox__button'),
};


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

const galleryMarkup = createGallery(galleryItems);
refs.galleryList.insertAdjacentHTML('beforeend', galleryMarkup);



// modal
function  lightboxToggle (e) {
refs.lightbox.classList.toggle('is-open');
refs.lightbox__image.src = e.target.dataset.source;
refs.lightbox__image.alt = e.target.dataset.alt;
e.preventDefault();
};



// open on enter not ready
// function enterHandler (e) {
//   if (e.key !== "Enter") {
//   return;
    
//   } lightboxToggle();
// };



// close on escape not ready
// function onCloseLightboxESC (e) {
//   if (e.key === "Escape") {
//     lightboxToggle();
//   }
  
// };


refs.galleryList.addEventListener('click', lightboxToggle);
refs.lightbox__button.addEventListener('click', lightboxToggle);
refs.lightbox__overlay.addEventListener('click', lightboxToggle);
window.addEventListener('keyup', onCloseLightboxESC);
window.addEventListener('keydown', enterHandler);