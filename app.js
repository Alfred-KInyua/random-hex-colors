const btn = document.getElementById('btn');
const span = document.querySelector('.color');
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
btn.addEventListener('click', () => {
  let randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  span.innerHTML = `<strong>${randomColor}</strong>`;
});
