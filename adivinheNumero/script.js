function sorteio(){
    return Math.round(Math.random() * 10);
}

var segredo = sorteiaNumeros(2);
console.log(segredo)
function sorteiaNumeros(quantidade){
    var segredo = [];
    var numero = 1;
    while(numero <= quantidade){
        var numeroA = sorteio()
        var achou = false

        if(numeroA !== 0){
            for(var posicao = 0; posicao < segredo.length; posicao ++){
                if(segredo[posicao] == numeroA){
                achou = true;
                break
                }
            }

            if(achou == false){
                segredo.push(numeroA)
                numero++
            } 
        } 
    }
    return segredo;
}

var input = document.querySelector("input");
input.focus(); 

function verifica(){
    achou = false;
    for(var i = 0; i < segredo.length; i++){
        if(input.value == segredo[i]){
            alert("PARABÉNS! Este é o número secreto!");
            achou = true;
            break
        }
    }
    if(achou == false){
        alert("Infelizmente, esse não é o número secreto.")
    }
    input.value = ""; 
    input.focus() 
}

var button = document.querySelector("button")
button.onclick = verifica;