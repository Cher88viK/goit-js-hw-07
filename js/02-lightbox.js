import { galleryItems } from "./gallery-items.js";

//Додавання елементів img до HTML

const gallery = document.querySelector(".gallery");
const items = createGalleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", items);

//Cтворення розмітки елементів галереї

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
      </a>
      </li>`;
    })
    .join("");
}

// Створення і рендер модального вікна за допомогою бібліотеки SimpleLightbox

const lightbox = new SimpleLightbox(".gallery a", {
  // captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
