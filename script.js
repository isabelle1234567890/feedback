let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botao => {
    botao.addEventListener("click", GuardarNota)
})

function GuardarNota(evento) {
    let nota = evento.target.innerText

    localStorage.setItem("nota", nota)
}