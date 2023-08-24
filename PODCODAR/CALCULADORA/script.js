function insert (num){
    let numero = document.getElementById("current-operation").innerHTML;
    document.getElementById("current-operation").innerHTML = numero + num


}

function limpar() {
    document.getElementById("current-operation").innerHTML = '';
}

function back (){

    let resultado = document.getElementById("current-operation").innerHTML;

    document.getElementById("current-operation").innerHTML = resultado.substring(0, resultado.length -1)

}

function calcular () {
    let resultado = document.getElementById("current-operation").innerHTML;

    if (resultado){
        document.getElementById("current-operation").innerHTML = eval(resultado);
    }

}