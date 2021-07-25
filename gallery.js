import galleryItems from "./app.js"

const galleryListRef = document.querySelector('.js-gallery');
const galleryMarkup = createGallery(galleryItems);
galleryListRef.insertAdjacentHTML('beforeend', galleryMarkup);

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
