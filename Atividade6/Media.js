var a, b, c, nome;

nome = prompt("Digite o seu nome: ");

a = prompt("Digite a primeira nota: ");
b = prompt("Digite a segunda nota: ");
c = prompt("Digite a terceira nota: ");

var media;

media = ((parseFloat(a) + parseFloat(b) + parseFloat(c)) / 3);


alert("O seu nome é: " + nome);
alert("A sua média é: " + media);
