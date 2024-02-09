function calcularValor() {

    let valor = document.getElementById("valor").value;
    let nome = document.getElementById("nome").value;


    if (valor >= 3000) { 
      return valor +(valor*0.10); 
    } else if (valor = 2500 <= 2999) { 
      return valor + (valor*0.05); 
    } else {
      return valor; 
    }
    resultado.textContent = `O valor calculado é ${valor}`;
  }
