function redirect() {
    window.location.href = "contact.php";
}

window.addEventListener('scroll', function () {
    const navbarSCROLL = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbarSCROLL.classList.add('scrolled');
    } else {
        navbarSCROLL.classList.remove('scrolled');
    }
});


window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    document.getElementById('progress-bar').style.width = scrollPercentage + '%';
});

window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    preloader.style.zIndex = '-1';
});

function getNavbarBackgroundColor() {
    const navbar = document.getElementById("navbar");
    const computedStyle = window.getComputedStyle(navbar);
    return computedStyle.backgroundColor;
}

function checkNavbarBackgroundColor() {
    const bgColor = getNavbarBackgroundColor();
    if (bgColor === 'rgb(51, 51, 51)') {

        console.log("it's gray");
        const style = document.createElement('style');
        style.type = 'text/css';

        const cssRule = `
          .navbar a:hover {
                color: #f5f5dc;
            }
        `;

        style.appendChild(document.createTextNode(cssRule));
        document.head.appendChild(style);

    } else {

        console.log(bgColor);
        console.log("it's not gray");
        const style = document.createElement('style');
        style.type = 'text/css';

        const cssRule = `
          .navbar a:hover {
                color: #333333;
            }
        `;

        style.appendChild(document.createTextNode(cssRule));
        document.head.appendChild(style);

    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkNavbarBackgroundColor();
});


window.addEventListener('scroll', function () {
    navbarCHECK = document.querySelector('nav');
    if (window.scrollY > 50) {
        checkNavbarBackgroundColor();
    } else if (window.scrollY == 0) {
        checkNavbarBackgroundColor();
    }
});