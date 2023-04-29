import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryMarkUp = document.querySelector(".gallery");
const imgCard = createImgCard(galleryItems);

galleryMarkUp.insertAdjacentHTML("beforeend", imgCard);

function createImgCard(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a>
    </div>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
