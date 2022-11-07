const menuLinks = document.querySelectorAll(".menu-links");

menuLinks.forEach((e) => {
      e.addEventListener('click', function(e){
            for (menuLink of menuLinks){
                  menuLink.classList.remove("active")
            }
            e.currentTarget.classList.add("active")
      })
})


const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector(".nav-header");



openNav.addEventListener('click', function() {
      // console.log("click")
      nav.classList.add('open-menu')
})

closeNav.addEventListener('click', function() {
      console.log("click")
      nav.classList.remove('open-menu')
})