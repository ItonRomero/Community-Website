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
const nav = document.querySelector("nav")


openNav.addEventListener('click', function() {
      nav.classList.add('open-nav')
})

closeNav.addEventListener('click', function() {
      nav.classList.remove('open-nav')
})