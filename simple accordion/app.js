const btn = document.querySelectorAll('.accordion');
const div = document.querySelectorAll('.panel');

function accordion() {
    this.nextElementSibling.classList.toggle('show');
}

btn.forEach(e => e.addEventListener('click', accordion));