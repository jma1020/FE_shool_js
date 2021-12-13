const memberList = document.body.querySelector(".list-member");

        const contents = ["Python", "Java", "JavaScript", "C#", "C/C++"];

        for (x of contents) {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.type = "button";
            button.innerText = x;
            li.appendChild(button);
            console.log(li);
            memberList.appendChild(li);
        }


        const selectButton = document.querySelector('.btn-select');
        const memberButtons = document.querySelectorAll('.list-member li button');

        selectButton.addEventListener('click', (event) => {
            selectButton.classList.toggle('on');
        });
        memberButtons.forEach(x => x.addEventListener('click', (event) => {
            selectButton.textContent = event.target.innerText;
            selectButton.classList.remove('on');
        }));