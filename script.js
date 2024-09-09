function modPlaceHol(){
    let selecionaNivel = document.getElementById("selecionaNivel");
    let nivel = selecionaNivel.options[selecionaNivel.selectedIndex].value;

    let inputValor = document.getElementById("valorBusca");

    if(nivel == "pais"){
        inputValor.setAttribute("placeholder", "Nome do país");
    }else if(nivel == "cidade"){
        inputValor.setAttribute("placeholder", "Nome da cidade");
    }else {
        inputValor.setAttribute("placeholder", "Nome do continente")
    }
}