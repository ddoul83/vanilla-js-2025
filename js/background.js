const images = ["0.jpg", "1.jpg", "2.jpg", "3.png", "4.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bg-fade"); // 애니메이션 클래스 추가

document.body.appendChild(bgImage);
