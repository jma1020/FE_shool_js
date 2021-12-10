        let flag = false;
        let lang = ['Python', 'Java', 'JavaScript', 'C#', 'C/C++']
        const select = document.querySelector('.btn-select');
        const list = document.querySelector('.list-member');
        for(let i = 0; i < lang.length; i++){
            list.insertAdjacentHTML('beforeend',`<li><button class="btn-li" type="button">${lang[i]}</button></li>`);
        }
        select.addEventListener('click', () => {
            flag === false ? list.style.display = 'block' : list.style.display = 'none';
            flag === false ? flag = true : flag = false;
        });
        list.addEventListener('click', e => {
            // e.stopPropagation();
            // e.preventDefault();
            select.textContent = e.target.textContent;
            flag === false ? list.style.display = 'block' : list.style.display = 'none';
            flag === false ? flag = true : flag = false; });