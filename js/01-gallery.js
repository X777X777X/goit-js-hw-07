import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryMarkUp = document.querySelector(".gallery");
const imgCard = createImgCard(galleryItems);

galleryMarkUp.insertAdjacentHTML("beforeend", imgCard);

galleryMarkUp.addEventListener("click", onImgClick);

let modalWindow;

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

function onImgClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const imgUrl = evt.target.dataset.source;

  modalWindow = basicLightbox.create(
    `<img src="${imgUrl}" width="800" height="600">`,
    {
      onShow: () => window.addEventListener("keydown", onEscKeyPress),
      onClose: () => window.removeEventListener("keydown", onEscKeyPress),
    }
  );

  modalWindow.show();
}

function onEscKeyPress(evt) {
  if (evt.code === "Escape") {
    modalWindow.close();
  }
}
