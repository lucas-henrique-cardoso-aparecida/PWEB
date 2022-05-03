var escolha, escolhapc;

escolha = prompt("Faça a sua escolha - 1 - Pedra | 2 - Papel | 3 - Tesoura : ");

escolhapc = Math.floor(Math.random() * 3) + 1;
alert("sua escolha: " + escolha);
alert("Escolha do computador: " + escolhapc);

if(escolhapc == 1){
    alert("O computador escolheu Pedra")
}
else if(escolhapc == 2){
    alert("O computador escolheu Papel")
}
else{
    alert("O computador escolheu Tesoura")
}

// Escolhendo Pedra
if(escolha == escolhapc){
    alert("Empate!")
}
else if(escolha == 1 & escolhapc == 2){
    alert("Você Perdeu!")
}
else if(escolha == 1 & escolhapc == 3){
    alert("Você Ganhou!")
}
else if(escolha == 2 & escolhapc == 1){
    alert("Você Ganhou!")
}
else if(escolha == 2 & escolhapc == 3){
    alert("Você Perdeu!")
}
else if(escolha == 3 & escolhapc == 1){
    alert("Você Perdeu!")
}
else if(escolha == 3 & escolhapc == 2){
    alert("Você Ganhou!")
}
