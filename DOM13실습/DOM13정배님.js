
      const selectCont = document.querySelector(".cont-select");
      const selectBtn = document.querySelector(".btn-select");
      const memberList = document.querySelector(".list-member");

      // for (let i = 0; i < 5; i++) {
      //   const myLi = document.createElement("li");
      //   memberList.appendChild(myLi);
      // }
      memberList.innerHTML = `<li><button type="button">Python</button></li>
            <li><button type="button">Java</button></li>
            <li><button type="button">JavaScript</button></li>
            <li><button type="button">C#</button></li>
            <li><button type="button">C/C++</button></li>`;

      selectBtn.addEventListener("click", function () {
        selectBtn.classList.toggle("on");
      });

      memberList.addEventListener("click", function (event) {
        selectBtn.innerText = event.target.innerText;
        selectBtn.classList.toggle("on");
      });
    