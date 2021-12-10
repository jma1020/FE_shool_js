const btn = document.querySelector('.btn-select'); //select
    const ul = document.querySelector('.list-member'); //ul


    let arr = ["Python", "Java", "JavaScript", "C#", "C/C++"];
    for (let i = 0; i < arr.length; i++) {
      const li = document.createElement("li");
      ul.append(li);
      li.innerHTML = `<button type='button'>${arr[i]}</button>`;
    }

    const listAll = ul.querySelectorAll('button'); // option list
    const firstOption = ul.querySelector('button'); //option first button
    const lastOption = listAll[listAll.length - 1]; //option last button


    const handlClickSelect = function () {
      btn.classList.toggle('on');
      ul.classList.toggle('on');
    }
    const handlClickOption = function (e) {
      btn.innerHTML = e.target.innerText;
      btn.classList.remove('on');
      ul.classList.remove('on');
      window.setTimeout(function () {
        btn.focus();
      }, 100);
    }

    //focus 이동
    const handleTabFoucus = function (e) {
      if (!e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        window.setTimeout(function () {
          firstOption.focus();
        }, 100);
      }
    };
    //shift+tab
    const handlShiftTabFoucus = function (e) {
      if (e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        window.setTimeout(function () {
          lastOption.focus();
        }, 100);
      }
    };
    //ESC키 
    const hadleEsc = function (e) {
      if (e.keyCode === 27) {
        btn.classList.remove('on');
        ul.classList.remove('on');
        window.setTimeout(function () {
          btn.focus();
        }, 100);
      }
    }

    btn.addEventListener('click', handlClickSelect);
    ul.addEventListener('click', handlClickOption);

    btn.addEventListener('keydown', hadleEsc);
    ul.addEventListener('keydown', hadleEsc);

    lastOption.addEventListener('keydown', handleTabFoucus);
    firstOption.addEventListener('keydown', handlShiftTabFoucus);