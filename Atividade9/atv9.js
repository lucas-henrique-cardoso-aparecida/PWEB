

function maior(a, b, c){

    if(a > b & a > c){
        return("O maior número é: " + a);
    }
    else if(b > a & b > c){
        return("O maior número é: " + b);
    }
    else{
        return("O maior número é: " + c);
    }

}


function crescente(a,b,c){

    
    var ordCrescente = [Number(a), Number(b), Number(c)];
        return ordCrescente.sort((a, b) => {
        return a-b;
    });
    
}

    var a, b, c;

    a = parseFloat(prompt("Digite o primeiro número: "));
    b = parseFloat(prompt("Digite o segundo número: "));
    c = parseFloat(prompt("Digite o terceiro número: "));

    alert(maior(a, b, c));
    
    var a, b, c;

    a = parseFloat(prompt("Digite o primeiro número: "));
    b = parseFloat(prompt("Digite o segundo número: "));
    c = parseFloat(prompt("Digite o terceiro número: "));

    alert(crescente(a, b, c));

    