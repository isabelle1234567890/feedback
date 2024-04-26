function pegarNota(){
    let nota = localStorage.getItem("nota")
    let pegarNota = document.querySelector(".paragrafo_nota")
    paragafoNota.innerHTML = 'Voce selecionou ${nota} de 5'
}
pegarNota()