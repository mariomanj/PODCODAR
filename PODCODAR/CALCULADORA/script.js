function calculadora(operador){
    if (operador === "multiplicar"){
        function numeros (numero1 , numero2){
            let soma = '';
            soma = numero1 * numero2;
            return soma;
        }
    } else if (operador === "somar"){
        function numeros (numero1 , numero2){
            let soma = '';
            soma = numero1 + numero2;
            return soma;
        }
    }else if (operador === "subtrair"){
        function numeros (numero1 , numero2){
            let soma = '';
            soma = numero1 - numero2;
            return soma;
        }
    }else if (operador === "dividir"){
        function numeros (numero1 , numero2){
            let soma = '';
            soma = numero1 / numero2;
            return soma;
        }
    }


}