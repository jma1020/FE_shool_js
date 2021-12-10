const selectBtn = document.querySelector(".btn-select");
const list = document.querySelector(".list-member");
const lang = ["Python", "Java", "JavaScript", "C#", "C/C++"];
for (const s of lang) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = s;
    li.appendChild(button);
    list.appendChild(li);
}
selectBtn.addEventListener("click", function () {
    selectBtn.classList.toggle("on");
});
list.addEventListener("click", (e) => {
    selectBtn.innerText = e.target.innerText;
    selectBtn.classList.remove("on");
});