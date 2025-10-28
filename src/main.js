import 'style.css';

document.addEventListener('DOMContentLoaded', () => {

  const wrap = document.querySelector('.wrap');
  const map  = document.querySelector('svg.map');
  if (!wrap || !map) return;

  const lines = map.querySelectorAll('g[id^="M"]');      
  const items = document.querySelectorAll('.legend-item[data-line]');

  const setActive = (id) => {
    map.setAttribute('data-active', id);
    wrap.setAttribute('data-active', id);
  };
  const clearActive = () => {
    map.removeAttribute('data-active');
    wrap.removeAttribute('data-active');
  };

  lines.forEach(line => {
    line.addEventListener('pointerenter', () => setActive(line.id));
    line.addEventListener('pointerleave', clearActive);
  });

  items.forEach(item => {
    const id = item.dataset.line;
    item.addEventListener('pointerenter', () => setActive(id));
    item.addEventListener('pointerleave', clearActive);
  });
})();


