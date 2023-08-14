function fatorial (N) {
    let resultado = 1;

      for (N; N > 0; N--) {
      resultado = resultado * N;

    }

    return resultado;
 }
const numero = 3;
const resultado = fatorial (numero);
    console.log (resultado);    