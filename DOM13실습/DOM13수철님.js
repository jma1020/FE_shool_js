const $ = (selector) => document.querySelector(selector)
const languageArray = ['Python', 'Java', 'JavaScript', 'C#', 'C/C++']

languageArray.forEach(e => {
    $('.list-member').insertAdjacentHTML("beforeend", `
    <li><button type="button">${e}</button></li>
    `)
})

$('.btn-select').addEventListener("click", function (event) {
    event.target.classList.toggle("on");
})

$('.list-member').addEventListener("click", function (event) {
    let selectedItem = event.target.innerText;
    $('.btn-select').innerText = selectedItem;
    $('.btn-select').classList.remove("on");
})