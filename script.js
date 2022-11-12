/*
    créditos para https://youtu.be/csNYVAS2ex8
*/

"use strict";

const images = [
    { 'id': "1", "url": "./img/zelda-botw.jpg"},
    { 'id': "2", "url": "./img/dark-souls3.jpg"},
    { 'id': "3", "url": "./img/hollow-knight.jpg"},
    { 'id': "4", "url": "./img/hades.jpg" }
];


const containerImg = document.querySelector("#slide__content");

const loadImages = ( images, containerImg ) => {
    images.forEach( img =>  {
        containerImg.innerHTML += `
            <div class='image'>
                <img src="${ img.url }">
            </div>
        `
    });
};

loadImages ( images, containerImg );

let imgs = document.querySelectorAll(".image");

const next = () => {
    containerImg.appendChild(imgs[0]); // adiciona ao ultimo
    imgs = document.querySelectorAll(".image");
}

document.querySelector("#next").addEventListener("click", next);

const previous = () => {
    const lastImg = imgs[imgs.length - 1];
    containerImg.insertBefore ( lastImg, imgs[0] );
    imgs = document.querySelectorAll(".image");
}

document.querySelector("#previous").addEventListener("click", previous);