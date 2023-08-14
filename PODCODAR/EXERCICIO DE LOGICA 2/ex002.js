function calcCelFar(fahrenheit){
  
    // Calcular de Fahrenheit para Celsius
    const celsius = 5 / 9 * (fahrenheit - 32)

    // Exibir os resultados

    document.getElementById('Celsius').innerText = `A tempatura em graus Celsius é de: ${celsius.toFixed(2)} °`;


}

function calcFarCel(celsius1){
    
    // Calcular de Celsius para Fahrenheit
    const fahrenheit1 = 1.8 * celsius1 + 32

    // Exibir os resultados

    document.getElementById('Fahrenheit1').innerText = `A tempatura em graus Fahrenheit é de: ${fahrenheit1.toFixed(2)} °`;


}