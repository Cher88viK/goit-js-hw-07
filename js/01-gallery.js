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
        <a class="gallery__link" href="${original}">
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

// Відкриття модального вікна і показ оригінального зображення

gallery.addEventListener("click", onGalleryClick);

//Скасування поведінки за замовчуванням

function onGalleryClick(e) {
  e.preventDefault();
  const isImgClick = e.target.classList.contains("gallery__image");
  if (!isImgClick) {
    return;
  }

  //Створення об'єкту для рендерингу модального вікна за допомогою бібліотеки basicLightbox

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener("keydown", keyEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", keyEsc);
      },
    }
  );

  //Закриття модального вікна після натискання клавіші Escape

  const keyEsc = (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  };

  instance.show();
}
//console.log(galleryItems);//
