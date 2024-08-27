function redirect() {
    window.location.href = "contact.php";
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('section').forEach(el => el.classList.add('fade-in-visible'));
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function handleScroll() {
    const sections = document.querySelectorAll('.about-us-section, .certified-section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('load', handleScroll);
