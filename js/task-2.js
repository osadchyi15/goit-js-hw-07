'use strict';

// Знаходимо цільовий елемент з класом gallery
const gallery = document.querySelector('.gallery');

// Задаємо флекс атрибути
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "20px";
gallery.style.justifyContent = "center";
gallery.style.listStyleType = "none";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

//Ф-я для створення одиничного img всередині li у вигляді тексту
function imageTemplate(imgObj) {
  return `<li>\n<img src=${imgObj.url} alt=${imgObj.alt} class="added-image"/>\n</li>`;
}

// Робимо масив з розміткою у вигляді тексту
function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('\n');
}

//Додаємо текст розмітки до DOM за одну дію
const markup = imagesTemplate(images);
gallery.innerHTML = markup;

//Додаєм стилі до зображень по заданому класу
const addedImages = document.querySelectorAll('.added-image');
for (const image of addedImages) {
  image.style.width = "320px";
  image.style.height = "240px";
  image.style.objectFit = "cover";
  image.style.border = "5px solid #aaa";
  image.style.borderRadius = "8px";
};


