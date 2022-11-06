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

document.querySelector("#filter_botao").addEventListener("click", exerciciofilter)


function exerciciofilter() {
    const ListaFilter = document.querySelector("#filter_lista").value
    const ValorFilter = document.querySelector("#filter_busca").value

    const vetorValores_filter = ListaFilter.split(",")
    const encontrou_filter = vetorValores_filter.filter(valor_filter => valor_filter == ValorFilter)

    let resultado_filter = ""

    if (encontrou_filter) {
        resultado_filter = "ENCONTROU"

    } else {
        resultado_filter = "NÃO ENCONTROU"
    }


    document.querySelector("#filter_resultado").innerHTML = resultado_filter
}