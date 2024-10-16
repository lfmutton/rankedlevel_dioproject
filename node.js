const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// same structure of the first project

function Program() {
    read.question('Quantas vitórias você teve?\n', (valor1) => {
        read.question('E quantas derrotas?\n', (valor2) => {
            CalculateRank(CalculateBalance(parseInt(valor1), parseInt(valor2)))
            read.close()
        })
    })
}

function CalculateBalance(wins, defeats) {
    return wins - defeats
}

function CalculateRank(balance) {
    const ranks = [
        [10, "Ferro"],
        [20, "Bronze"],
        [50, "Prata"],
        [80, "Ouro"],
        [90, "Diamante"],
        [100, "Lendário"],
        [undefined, "Imortal"]
    ]
    let i = -1
    do {
        i++
    } while (balance > ranks[i][0] && i < 6);
    console.log(`O Herói tem de saldo de ${balance} está no nível de ${ranks[i][1]}`)
}

Program()