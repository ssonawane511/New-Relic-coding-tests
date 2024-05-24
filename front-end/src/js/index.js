console.log("Hello World");
const mobileNavBtn = document.getElementById('mobile-nav-btn')
const mobileNav = document.getElementById('mobile-nav')

mobileNavBtn.addEventListener('click', (e) => {
    if(mobileNav.style.height === '')
    {
        mobileNav.style.height = 'fit-content'
    }else{
        mobileNav.style.height = ''
    }
})