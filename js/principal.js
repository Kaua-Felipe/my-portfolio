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

/* Alteração Altomática da Escrita */
$("input[name=name-people]").on("keyup", function() {
    $("span#name-people").html($(this).val())
})

/* Pré Loader */
var loader = document.getElementById("preloader")

window.addEventListener("load", () => {
    loader.style.display = "none"
})