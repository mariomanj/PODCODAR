function calcular(radius) {
    
    // Calcular a área e o comprimento
    const area = 3.14 * (radius * radius);
    const comprimento = 2 * 3.14 * radius;
    const arames = comprimento / 20;

    // Exibir os resultados na página
    document.getElementById('area').innerText = `Área do canteiro: ${area.toFixed(2)} m²`;
    document.getElementById('comprimento').innerText = `Comprimento do canteiro: ${comprimento.toFixed(2)} m`;
    document.getElementById('arames').innerText = `A quantidade de arames a ser utilizado será: ${arames.toFixed(2)} rolos`;
}






