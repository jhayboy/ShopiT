const hamBurger = document.querySelector('.burger')
const navList = document.querySelector('.nav-list')
const navBtn = document.querySelector('.nav-btn')
const liLi = document.querySelectorAll('.li')
const upper = document.querySelector('.upper')


window.onscroll = () => {
    if (window.scrollY > 3000) {
        upper.classList.add("upping")
    } else {
        upper.classList.remove("upping")
    }
}
hamBurger.addEventListener('click', () => {
    navList.style.height = '70%'
});

navBtn.addEventListener('click', () => {
    navList.style.height = '0%'
});

liLi.forEach((item, index) => {
    item.addEventListener('click', () => {
        navList.style.height = '0%'
    })
});