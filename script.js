const leaves = document.getElementById('leaves');
const sun = document.getElementById('sun');
const mountains = document.getElementById('mountains');
const tree = document.getElementById('tree');

window.addEventListener('scroll', function() {
  let value = window.scrollY;
  
  leaves.style.top = value * -0.5 + 'px';
  sun.style.top = value * 1.25 + 'px';
  mountains.style.top = value * 0.5 + 'px';
  tree.style.top = value * 0 + 'px';
});