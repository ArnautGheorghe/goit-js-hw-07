import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `<a class='gallery__link' href='${item.original}'>
        <img class='gallery__image' 
        src='${item.preview}' 
        data-source='${item.original}' 
        alt='${item.description}'/>
    </a>`;
    listEl.append(listItemEl);
    
});

let captionPosition= "outside"
let gallery = new SimpleLightbox(".gallery a", { captionPosition });
gallery.on("show.simplelightbox");

