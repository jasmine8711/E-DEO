const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.j-links');
    const navLinks = document.querySelectorAll('.j-links li');
    const home = document.querySelector('homecontainer');
    //toggle Nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('j-active');
    });
   
    //animate links
    navLinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = 'navLinkFade 0.2s ease forwards ${index/7}s'
        }
    });
}
navSlide();