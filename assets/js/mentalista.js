var tentativas=0;
console.log(tentativas);
var numeroSecreto = parseInt((Math.random()*10)+1);

function tentar(){
    tentativas++;
    if(tentativas<6){
        chutar();
    }
    else{
        resultado.innerHTML = "Você não conseguiu! Recarregue a página e tente novamente";
        document.getElementById("palpite").disabled = true;
        document.getElementById("botao").disabled = true;
    }
    console.log(tentativas);
}


function chutar(){
    var numeroChutado = parseInt(document.getElementById("palpite").value);
    if (numeroChutado > 10 || numeroChutado < 0){
        resultado.innerHTML = "Você deve digitar um número entre 1 e 10! <br> <img src='assets/img/erro.png'>";
    } else if(numeroChutado == numeroSecreto){
        resultado.innerHTML = "Parabéns! Você acertou!" + "<br>" + "<img src='assets/img/fogos2.png'>";
        document.getElementById("palpite").disabled = true;
    } else if(numeroChutado != numeroSecreto){
        resultado.innerHTML = "Você não conseguiu! <br>Tente novamente <br><br> <img src='assets/img/errado.png'>";
    }  
    document.getElementById("palpite").value = "";
    
}