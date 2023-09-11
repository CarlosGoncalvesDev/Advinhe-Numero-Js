alert("Boas vindas ao jogo do número secreto");

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;
let palavraTentativa;

// Enquanto o chute não for igual ao número secreto
while (numeroSecreto != chute) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // Se o chute for igual ao número secreto
    if (numeroSecreto == chute) {
        break;
    }
    else {
        if (numeroSecreto > chute) {
            alert(`O seu número secreto é maior que o ${chute} `);
        } else {
            alert(`O seu número secreto é menor que o ${chute}`);
        }
        tentativas++;
    }
}

palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso ai!, Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

