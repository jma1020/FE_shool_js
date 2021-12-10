
const btn = document.querySelector('.btn-select');
btn.addEventListener('click', function() {
    btn.classList.toggle('on');
});

const languages = ['Python', 'Java', 'JavaScript', 'C#', 'C/C++'];
const list = document.querySelector('.list-member');
for (lang of languages) {
    list.innerHTML += `<li><button type="button">${lang}</button></li>`;
}
list.addEventListener('click', function(event) {
    btn.innerText = event.target.innerText;
    btn.classList.toggle('on');
});
