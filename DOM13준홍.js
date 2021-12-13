const button = document.querySelector('.btn-select');
const list = document.querySelector('.list-member');
const fragment = document.createDocumentFragment();

['Python', 'Java', 'JavaScript', 'C#', 'C/C++'].forEach(lang => {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.appendChild(document.createTextNode(lang));
  li.appendChild(btn);
  fragment.appendChild(li);
});
list.appendChild(fragment);

button.addEventListener('click', e => e.currentTarget.classList.toggle('on'));

list.addEventListener('click', e => {
  button.textContent = e.target.textContent;
  button.classList.remove('on');
});