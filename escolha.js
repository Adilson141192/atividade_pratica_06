let bebida = null;
let valor = 0;
 
switch(bebida){
    case "café":
        valor = 1.111;
        break;

    case "leite":
        valor = 2.222;
        break;

    case "chá":
        valor = 3.333
        break;

    default:
        console.log(`Essa ${bebida} não é uma opção! Escolha entre café, leite ou chá.`);
}
console.log(`Você escolheu ${bebida} e o seu valor é ${valor.toFixed(2)}!`);
