const hamBurga = document.querySelector('.burga')
const beautyList = document.querySelector('.beauty-list')
const navBtn1 = document.querySelector('.nav-btn1')
const liLo = document.querySelectorAll('.li')
const beautyNav = document.querySelector('.beauty-nav')
const up = document.querySelector('.up')


window.onscroll = () => {
    if (window.scrollY > 300) {
        beautyNav.classList.add("nav-color");
    }else {
        beautyNav.classList.remove("nav-color");
    }

    if (window.scrollY > 3000) {
        up.classList.add("up-button")
    } else {
        up.classList.remove("up-button")
    }
};

hamBurga.addEventListener('click', () => {
    beautyList.style.height = '70%'
});

navBtn1.addEventListener('click', () => {
    beautyList.style.height = '0%'
})

liLo.forEach((item,index)=> {
    item.addEventListener('click', () => {
        beautyList.style.height = '0%'
    })
})