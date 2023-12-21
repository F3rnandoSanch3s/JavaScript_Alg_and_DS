//COMPLEXIDADES DE TEMPO DE EXECUÇÃO

function addUpToSecond(n) {
    return n * (n + 1) / 2; //bigO(1) 
}
//sempre 3 operações "n *" "(n + 1)" "/2".
//vai praticamente ser uma função constante f(n)=1.
//pq indepedente os valores colocados o numero de operações
//necessarias não muda.

function addUpToFirst(n) {
    var total = 0;
    for (var i = 0; i <= n; i++) { //bigO(n)
      total += i;
    }
    return total;
}
//se N for 1 ou 10000, tanto faz, o numero de operações vai
//ser definido por N, se N=1000, 1000 operações necessarias
//devido ao total += i; que sempre vai receber um novo valor e 
//acrescentar para a nova operação.
//logo plotando uma função linear f(n)=n

function countUpAndDown(n) {
    console.log("Going up!");
    for (var i = 0; i < n; i++) { //bigO(n)
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (var j = n - 1; j >= 0; j--) { //bigO(n)
      console.log(j);
    }
    console.log("Back down. Bye!");
}
//o numero de operações necessarias vai ser definido por N.
//esse é um caso parecido com o anterior, apenas usando 2 laços for
//plotando na tela tbm uma função linear f(n)=n.

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) { //bigO(n2)
        console.log(i, j);
      }
    }
}
//aqui temos o exemplo de uma função quadratica f(n)=n2,
//essa função coloca um laço for dentro do outro, deixando 
//um bigo(n) dentro de outro bigO(n).

