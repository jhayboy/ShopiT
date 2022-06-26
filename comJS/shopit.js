const hamBurger = document.querySelector('.burger')
const navList = document.querySelector('.nav-list')
const navBtn = document.querySelector('.nav-btn')
const liLi = document.querySelectorAll('.li')
const upper = document.querySelector('.upper')
const shopitNav = document.querySelector('.shopit-nav')


const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".products")
    const pname = storeitems.getElementsByTagName("h4")
    const alertMessage = document.querySelector(".alert-message")


  
    for (var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h4')[0]
        if (match) {
            
            let textValue = match.textContent || match.innerHTML
            
            if (textValue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = ""
            }else {
                product[i].style.display = "none"
            }




            




        }
       
    }
}







window.onscroll = () => {
    if (window.scrollY > 600) {
        upper.classList.add("upping")
    } else {
        upper.classList.remove("upping")
    }

    if (window.scrollY > 250) {
        shopitNav.classList.add("shopit-color")
    } else {
        shopitNav.classList.remove("shopit-color")
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