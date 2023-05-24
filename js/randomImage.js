const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    image.src = randomImage;
    console.log("Uus pilt:", randomImage);
}