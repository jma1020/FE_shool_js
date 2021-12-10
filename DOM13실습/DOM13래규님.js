const selectBtn = document.querySelector(".btn-select");
const selectList = document.querySelector(".list-member");
let toggle = false;

selectBtn.addEventListener("click", function() {
    if (toggle === false) {
        selectList.style.display = "block";
        selectList.innerHTML = `<li><button type="button">Python</button></li>
        <li><button type="button">Java</button></li>
        <li><button type="button">JavaScript</button></li>
        <li><button type="button">C#</button></li>
        <li><button type="button">C/C++</button></li>`;
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