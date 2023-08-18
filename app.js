const btn = document.getElementById('btn');
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
});
