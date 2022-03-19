/* Scroll Suave */
$(".back-top a, a.link-projects, a.link-about").click(function(e) {
    e.preventDefault()
    var idScrollTop = $(this).attr("href")
    targetOffset = $(idScrollTop).offset().top
    $("html, body").animate({
        scrollTop: targetOffset
    }, 1000)
})

/* Menu Mobile */
var telaMenuMobile = document.querySelector("div.nav-mobile")

$("#icon-hamburguer").click(() => {
	telaMenuMobile.style.display = "initial"
})
$(".list-option").click(() => {
	telaMenuMobile.style.display = "none"
})
$(".sairTelaMenuMobile").click(() => {
	telaMenuMobile.style.display = "none"
})