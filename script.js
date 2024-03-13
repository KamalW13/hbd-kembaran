const btnPembuka = document.querySelector('button.open-message');
const pembuka = document.querySelector('.pembuka');
const audio = document.querySelector('audio');
const sectionHidden = document.querySelector('.container-section');

btnPembuka.addEventListener('click', () => {
    audio.play();
    pembuka.classList.add('close');

    sectionHidden.classList.remove('hidden');
});


const imgSecret = document.querySelectorAll('.page-2 img.hidden');
const btnPhotoSecret = document.querySelector('.page-2 button.photo-secret');
btnPhotoSecret.addEventListener('click', () => {
    imgSecret.forEach((img) => {
        img.classList.toggle('hidden');
    })
})



const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}

window.addEventListener("load", () => {
  createBalloons(30)
});

window.addEventListener("click", () => {
  removeBalloons();
});


const btnFunFact = document.querySelector('.page-3 .tombol');
const messageFunFact = document.querySelector('.pesan-funfact');
btnFunFact.addEventListener('click', () => {
    messageFunFact.classList.toggle('hidden');
    btnFunFact.classList.toggle('toTop');

})