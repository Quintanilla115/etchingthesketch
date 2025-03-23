let grid = document.querySelector('.grid');
grid.computedStyleMap.gridTemplateColumns = 'repeat(16, 1fr)';
grid.computedStyleMap.gridTemplateRows = 'repeat(16, 1fr)';

for (let i = 0; i < 256; i++) {
  let square  = document.createElement('div');
  square.style.backgroundColor = 'red';
  grid.insertAdjacentElement('beforeend', square);
}