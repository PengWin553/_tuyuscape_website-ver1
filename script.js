// raindrops ---------------------------------------
function createRaindrops() {
    const rain = document.querySelector('.rain');

    for (let i = 0; i < 100; i++) {
      const raindrop = document.createElement('div');
      raindrop.classList.add('raindrop');
      raindrop.style.left = `${Math.random() * 100}%`;
      raindrop.style.animationDelay = `${Math.random()}s`;
      rain.appendChild(raindrop);
    }
  }

  createRaindrops();
// raindrops ---------------------------------------
