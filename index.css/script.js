function changeBackground() {
  const colors = ['#f0f0f0', '#ffe4e1', '#e0ffff', '#fafad2', '#d3ffd3'];
  const currentColor = document.body.style.backgroundColor;
  let newColor = colors[Math.floor(Math.random() * colors.length)];
  while (newColor === currentColor) {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  }
  document.body.style.backgroundColor = newColor;
}