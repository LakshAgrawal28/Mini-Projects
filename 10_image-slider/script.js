const sliderImage = document.getElementById("sliderImage");
const imageCount = document.getElementById("imageCount");
const prevBtn = document.getElementById("prevBtn");
const randomBtn = document.getElementById("randomBtn");
const nextBtn = document.getElementById("nextBtn");

const images = [
  "https://picsum.photos/id/1015/500/300",
  "https://picsum.photos/id/1025/500/300",
  "https://picsum.photos/id/1035/500/300",
  "https://picsum.photos/id/1041/500/300",
  "https://picsum.photos/id/1043/500/300",
  "https://picsum.photos/id/1050/500/300",
  "https://picsum.photos/id/1057/500/300",
  "https://picsum.photos/id/1069/500/300",
  "https://picsum.photos/id/1074/500/300",
  "https://picsum.photos/id/1084/500/300",
  "https://picsum.photos/id/1080/500/300",
  "https://picsum.photos/id/1081/500/300",
  "https://picsum.photos/id/1082/500/300",
  "https://picsum.photos/id/1083/500/300",
  "https://picsum.photos/id/1085/500/300",
  "https://picsum.photos/id/1089/500/300",
  "https://picsum.photos/id/109/500/300",
  "https://picsum.photos/id/110/500/300",
  "https://picsum.photos/id/111/500/300",
  "https://picsum.photos/id/112/500/300",
  "https://picsum.photos/id/113/500/300"
];

let currentIndex = 0;

function showImage() {
  sliderImage.src = images[currentIndex];
  imageCount.textContent = `Image ${currentIndex + 1} of ${images.length}`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

randomBtn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * images.length);

  while (randomIndex === currentIndex && images.length > 1) {
    randomIndex = Math.floor(Math.random() * images.length);
  }

  currentIndex = randomIndex;
  showImage();
});

showImage();
