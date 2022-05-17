
function Retângulo (x, y){
  this.x = x;
  this.y = y;

  this.calcArea = function(){
      return (this.x * this.y);
  }
}

nRetângulo = new Retângulo(4, 5);

alert("Cálculo da área de um Retângulo de base: " + nRetângulo.x + " e altura: " + nRetângulo.y + '\n' +
      "Igual a: " + nRetângulo.calcArea());


function Conta (nome_correntista, numConta, saldo){
  var nome_correntista, numConta, saldo;

   this.getNome_correntista = function(){
      return nome_correntista;
   }
   this.setNome_correntista = function(value){
       nome_correntista = value;
   }

   this.getnumConta = function(){
       return numConta;
   }

   this.setnumConta = function(value){
       numConta = value;
   }

   this.getsaldo = function(){
       return saldo;
   }

   this.setsaldo = function(value){
       saldo = value;
   }
}

function Conta_Corrente(Saldo_Especial){
    var Saldo_Especial;

    this.getSaldo_Escecial = function(){
        return Saldo_Especial
    }

    this.setSaldo_Especial = function(value){
        Saldo_Especial = value;
    }
}

function Conta_Poupanca(Juros){
    var Juros

    this.getJuros = function(){
        return Juros;
    }

    this.setJuros = function(value){
        Juros = value;
    }
}

Conta_Corrente.prototype = new Conta();
Conta_Poupanca.prototype = new Conta();

nConta_Corrente = new Conta_Corrente();
nConta_Corrente.setNome_correntista("Lucas Henrique");
nConta_Corrente.setnumConta(1400);
nConta_Corrente.setsaldo(1000);
nConta_Corrente.setSaldo_Especial(300);

alert(nConta_Corrente.getNome_correntista() + '\n' + nConta_Corrente.getnumConta() + '\n' +
      nConta_Corrente.getsaldo() + '\n' + nConta_Corrente.getSaldo_Escecial());

nConta_Poupanca = new Conta_Poupanca();
nConta_Poupanca.setNome_correntista("Lucas Cardoso");
nConta_Poupanca.setnumConta(1200);
nConta_Poupanca.setsaldo(1400);
nConta_Poupanca.setJuros(200);

alert(nConta_Poupanca.getNome_correntista() + '\n' + nConta_Poupanca.getnumConta() + '\n' +
      nConta_Poupanca.getsaldo() + '\n' + nConta_Poupanca.getJuros());