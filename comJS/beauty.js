const hamBurga = document.querySelector('.burga')
const beautyList = document.querySelector('.beauty-list')
const navBtn1 = document.querySelector('.nav-btn1')
const liLo = document.querySelectorAll('.li')
const beautyNav = document.querySelector('.beauty-nav')
const up = document.querySelector('.up')



const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".acne")
    const pname = storeitems.getElementsByTagName("h4")
    const alertMessage = document.querySelector(".alert-message")



    for (i = 0; i < pname.length; i++) {
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
    if (window.scrollY > 300) {
        beautyNav.classList.add("nav-color");
    }else {
        beautyNav.classList.remove("nav-color");
    }

    if (window.scrollY > 600) {
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