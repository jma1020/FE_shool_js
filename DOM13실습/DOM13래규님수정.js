const selectBtn = document.querySelector(".btn-select");
const selectList = document.querySelector(".list-member");
const languageList = ["Python", "Java", "JavaScript", "C#", "C++"];
let toggle = false;

for (const iterator of languageList) {
    selectList.innerHTML += `<li><button type="button">${iterator}</button></li>`;
}

selectBtn.addEventListener("click", function() {
    if (toggle === false) {
        selectList.style.display = "block";
        toggle = true;
    }
    else {
        selectList.style.display = "none";
        toggle = false;
    }
});

selectList.addEventListener("click", function(event) {
    selectList.style.display = "none";
    selectBtn.innerText = event.target.innerText;
    toggle = false;
})