var a, b;

a = prompt('Digite o primeiro número: ');

b = prompt('Digite o segundo número: ');

var soma, subtr, prod, div, rest;

soma = parseFloat(a) + parseFloat(b);
subtr = parseFloat(a) - parseFloat(b);
prod = parseFloat(a) * parseFloat(b);
div = parseFloat(a) / parseFloat(b);
rest = (parseFloat(a) % parseFloat(b));

alert('Soma dos dois números: ' + soma);
alert('Subração do primeiro pelo segundo: ' + subtr);
alert('Produto dos dois: ' + prod);
alert('Divisão do primeiro pelo segundo: ' + div);
alert('Resto da divisão do primeiro pelo segundo: ' + rest);