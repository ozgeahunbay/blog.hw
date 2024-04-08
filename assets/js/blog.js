const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const main = document.querySelector('main');


let mode = 'dark';


themeSwitcher.addEventListener('click', function () {

    if (mode === 'dark') {
        mode = 'light';
        container.setAttribute('class', 'light');
    }

    else {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
});

back.onclick = function () {
    window.location.replace("./index.html");
}


function saveInfo() {

    let userinput = localStorage.getItem('userinput')
    let blogs = JSON.parse(userinput) || []
    for (let i = 0; i < blogs.length; i++) {

        const div = document.createElement('div')
        div.classList.add('boxes')
        let html = `
    <h2>${blogs[i].username} </h2>
    <p>${blogs[i].title}</p>
    <p>${blogs[i].content}</p>
`

        div.innerHTML = html
        main.appendChild(div)
    }

}


saveInfo()
