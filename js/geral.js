/* Scroll Suave */
$(".back-top a, a.link-projects, a.link-about").click(function(e) {
    e.preventDefault()
    var idScrollTop = $(this).attr("href")
    targetOffset = $(idScrollTop).offset().top
    $("html, body").animate({
        scrollTop: targetOffset
    }, 1000)
})