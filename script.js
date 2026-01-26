let jogador1;
let qtdjogador2 = 0;
let contador = 0;
let chances = [];

function definirNumero() {
    jogador1 = Number(document.getElementById("jogador1").value);

    if (jogador1 <= 0 || isNaN(jogador1)) {
        document.getElementById("mensagem").textContent =
            "Jogador 1, escolha um número maior que 0.";
        return;
    }

    document.getElementById("mensagem").textContent =
        "Número definido! \n Jogador 2, tente adivinhar.";

    document.getElementById("jogador1-area").style.display = "none";
    document.getElementById("jogador2-area").style.display = "block";
}

function jogar() {
    qtdjogador2 = Number(document.getElementById("jogador2").value);
    contador++;
    chances.push(qtdjogador2);

    const mensagem = document.getElementById("mensagem");
    const contadorTexto = document.getElementById("contador");

    if (qtdjogador2 < jogador1) {
        mensagem.textContent =
            "O número informado pelo jogador 1 é MAIOR. Continue tentando!";
    }
    else if (qtdjogador2 > jogador1) {
        mensagem.textContent =
            "O número informado pelo jogador 1 é MENOR. Continue tentando!";
    }
    else {
        mensagem.textContent =
            "🎉 PARABÉNS! \n Você adivinhou o número do Jogador 1!";
        contadorTexto.textContent =
            "Total de tentativas: " + contador;

        console.log("Tentativas:", chances);
    }
}
