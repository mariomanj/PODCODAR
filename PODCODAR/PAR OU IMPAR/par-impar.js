function parImpar (primeiro, segundo) {

    let pontosPar = 0;
    let pontosImpar = 0;

    for (i = 0; i < primeiro.length ; i++) { 
        const soma = primeiro[i] + segundo [i];
        if (soma % 2 === 0) {
            pontosPar++;
        } else {
            pontosImpar++;
        }


    }
    if (pontosPar > pontosImpar) {
        return 'PRIMEIRO GANHOU'
    } else if (pontosImpar > pontosPar) {
        return 'SEGUNDO GANHOU'
    } else {
        return 'EMPATE'
    }

}

const primeiro = [3, 4, 5, 8, 9, 7]
const segundo = [2, 2, 1, 5, 9, 3]
const resultado = parImpar(primeiro, segundo)

console.log(resultado)






