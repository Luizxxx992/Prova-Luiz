let botaoCalcular = document.getElementById('btnCalcular');



let valor=prompt("Digite o valor do carro");
let condicao=prompt("escolha a opçao de pagamento 1,2,3");

const financiamento=valor+(valor*0.30);
const consorcio=valor +(valor+0.15);



switch(condicao){
    case "1":
        let financiamento= financiamento;
        console.log("O valor com financiamento é"+ financiamento);

    case "2":
        let consorcio=consorcio;
        console.log("O valor do carro com consorcio é"+consorcio);

      case "3":
        console.log("O valor do carro a vista " + valor);  
}