export default function popovers(element) {
  element.preventDefault();
  const container = document.querySelector('.error-form');
  const error = document.createElement('div');
  const text = document.createElement('p');
  const title = document.createElement('h4');
  const arrow = document.createElement('div');
  title.textContent = 'Popover title';
  text.textContent = 'And here`s some amazing content. It`s very engaging. Right?';
  error.appendChild(title);
  error.appendChild(text);
  error.appendChild(arrow);
  arrow.className = 'arrow';
  error.className = 'error';
  error.id = performance.now();
  container.appendChild(error);
  error.style.top = `${container.offsetTop - error.offsetHeight - arrow.offsetHeight * 2}px`;
  error.style.left = `${container.offsetLeft - (error.offsetWidth - container.offsetWidth) / 2}px`;
}
