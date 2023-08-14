function vencedorParImpar(primeiro, segundo) {
    let pontosPrimeiro = 0;
    let pontosSegundo = 0;

    for (let i = 0; i < primeiro.length; i++) {
        const soma = primeiro[i] + segundo[i];
        if (soma % 2 === 0) {
            pontosPrimeiro++;
        } else {
            pontosSegundo++;
        }
    }

    if (pontosPrimeiro > pontosSegundo) {
        return "PRIMEIRO";
    } else if (pontosSegundo > pontosPrimeiro) {
        return "SEGUNDO";
    } else {
        return "EMPATE";
    }
}

const primeiro = [3, 4, 5, 8, 9, 7];
const segundo = [2, 2, 1, 5, 9, 3];
const resultado = vencedorParImpar(primeiro, segundo);
console.log(resultado);