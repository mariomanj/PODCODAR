    let pontuacao = JSON.parse(localStorage.getItem('pontuacao')) || {
        ganhou:0,
        perdeu:0,
        empate:0
    };
    
    /*
    if (!pontuacao) {

        pontuacao = {
            ganhou:0,
            perdeu:0,
            empate:0
        };
    }
    */

function movimentoPC () {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Pedra';   
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Papel';
    } else if (randomNumber >= 2 /3 && randomNumber < 1){
        computerMove = 'Tesoura';
    }
    return computerMove;   
}

function jogar (movimentoJogador) {
    const computerMove =  movimentoPC();

    let result = '';

    if (movimentoJogador === 'Tesoura') {
        if (computerMove === 'Pedra') {
            result = 'Voce Perdeu!!';
        } else if (computerMove === 'Papel') {
            result = 'Voce ganhou!!';
        } else if (computerMove === 'Tesoura') {
            result = 'Empate';
        }
    } else if (movimentoJogador === 'Papel') {
        if (computerMove === 'Pedra') {
            result = 'Voce ganhou!!';
        } else if (computerMove === 'Papel') {
            result = 'Empate';
        } else if (computerMove === 'Tesoura') {
            result = 'Voce perdeu!!';
        }
    } else {
        if (computerMove === 'Pedra') {
            result = 'Empate';
        } else if (computerMove === 'Papel') {
            result = 'Voce perdeu!!';
        } else if (computerMove === 'Tesoura') {
            result = 'Voce ganhou!!';
        }
    }

    if (result === 'Voce ganhou!!') {
        pontuacao.ganhou++;
    } else if (result === 'Voce perdeu!!') {
        pontuacao.perdeu++;
    } else if (result === 'Empate') {
        pontuacao.empate++;
    }

    localStorage.setItem('pontuacao', JSON.stringify(pontuacao));
    

    alert(`Voce escolheu ${movimentoJogador} Computador escolheu ${computerMove} ${result}
    Ganhou: ${pontuacao.ganhou} Perdeu: ${pontuacao.perdeu} Empate: ${pontuacao.empate}`);
}
