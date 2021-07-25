import galleryItems from "./app.js"

const galleryListRef = document.querySelector('.js-gallery');

function createGallery () {

const items = gallery.map(({preview, original, description}) => {
return 
`<li class="gallery__item">
  <a class="gallery__link"
    href="${original}">
   
    <img class="gallery__image"
      src="${preview}"
      data-source="${description}"
      alt="Tulips"/>
  </a>
</li>`
;})
.join('');
return items;
};

console.log