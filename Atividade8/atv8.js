var i, idade, sexo, qtdidade = 0, mediaidade = 0, opiniao, maisvelha = 0, maisnova = 100, qtdspess = 0, percentualotimo = 0, qtdm = 0, qtdf = 0, qtdbo = 0, qtdp = 0;

    for (i = 1; i <= 45; i++) {
        idade = parseFloat(prompt("Digite a sua idade: "));
        
        if (idade < maisnova){
            maisnova = idade;
        }
        
        if (idade > maisvelha){
            maisvelha = idade;
        }
        
        qtdidade += idade;
        qtdspess ++;
        
        sexo = prompt("Sexo: M ou F:").toUpperCase;
        
        if (sexo = "M"){
            qtdm++
        }
        else if (sexo = "F"){
            qtdf++
        }
        
        opiniao = prompt("Digite a sua opinião em relação ao filme - 4 - Ótimo | 3 - Bom | 2 - Regular | 1 - Péssimo.");
        
        if(opiniao == 1){
            qtdp++;
        }
        else if(opiniao == 4 || opiniao == 3){
            qtdbo++;
        }
    }
    mediaidade = parseFloat(qtdidade / qtdspess);
    percentualotimo = (qtdbo*100) / 3;
    alert("Media da idade das Pessoas que responderam o formulário: " + mediaidade);
    alert("Idade da pessoa mais velha que respondeu o formulário: " + maisvelha);
    alert("Idade da pessoa mais nova que respondeu o formulário: " + maisnova);
    alert("Quantidade de pessoas que responderam Péssimo: " + qtdp);
    alert("Porcentagem de pessoas que responderam Ótimo e Bom: " + percentualotimo + "%");
    alert("Quantidade de homems que responderam o formulário: " + qtdm);
    alert("Quantidade de mulheres que responderam o formulário: " + qtdf);



