let bebida = null;
let valor = "0";
let valorFloat = parseFloat(valor);
let valorFormatado = valorFloat.toFixed(2);
 
switch(bebida){
    case "café":
        break;

    case "leite":
        break;

    case "chá":
        break;

    default:
        console.log(`Essa ${bebida} não é uma opção! Escolha entre café, leite ou chá.`);
}
console.log(`Você escolheu ${bebida} e o seu valor é ${valorFormatado}!`);
