/* Animação de Estar Digitando */
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split("")
    elemento.innerHTML = ""
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 200 * i)
    })
}

const titulo = document.querySelector("h3")
typeWriter(titulo)

/* Alteração Automática da Escrita */
$("input[name=name-people]").on("keyup", function() {
    $("span#name-people").html($(this).val())
})

/* Pré Loader */
var loader = document.getElementById("preloader")

window.addEventListener("load", () => {
    loader.style.display = "none"
})

/* Animar ao Scroll */
const debounce = function(func, wait, immediate) {
    let timeout
    return function(...args) {
        const context = this
        const later = () => {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

const target = document.querySelectorAll("[data-animation]")
const animationClass = "animate"

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 9) / 10)
    target.forEach((element) => {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass)
        }
        else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()
if(target.length) {
    window.addEventListener("scroll", debounce(() => {
        animeScroll()
    }, 10))
}

/* Animar Navegação ao Scroll */
// var nav = document.querySelector("nav#main-nav")
// window.addEventListener("scroll", () => {
//     nav.style.top = "-100px"
// })
// while(true) {

//     break
// }
var prevScrollpos = window.pageYOffset
var nav = document.querySelector("nav#main-nav")
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset
    if(prevScrollpos > currentScrollPos) {
        nav.style.top = "0"
    } else {
        nav.style.top = "-100px"
    }
    prevScrollpos = currentScrollPos
}
