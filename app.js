const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.j-links');
    const navLinks = document.querySelectorAll('.j-links li');
    //toggle Nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('j-active');
    });
    //animate links
    navLinks.forEach((link,index)=>{
        link.style.animation = 'navLinkFade 0.2s ease forwards ${index/3}s';
    });
}
navSlide();