import "./scss/style.scss"

document.querySelector("#find_botao").addEventListener("click", exerciciofind)


function exerciciofind() {
    const ListaBruta = document.querySelector("#find_lista").value
    const ValorBuscar = document.querySelector("#find_busca").value

    const vetorValores = ListaBruta.split(",")
    const encontrou = vetorValores.find(valor => valor == ValorBuscar)

    let resultado = ""

    if (encontrou) {
        resultado = "ENCONTROU"

    } else {
        resultado = "NÃO ENCONTROU"
    }


    document.querySelector("#find_resultado").innerHTML = resultado
}