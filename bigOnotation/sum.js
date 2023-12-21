//COMPLEXIDADES DE ESPAÇO 

function sum(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i){ 
        total += arr[i]; //bigO(1)
    }
    return total;
}
//o espaço é o mesmo não importando o tamanho da entrada

function double(arr){
    let newarr = [];
    for (let i = 0; i < arr.length; i++){
        newarr.push(2*arr[i]);//bigO(n)
    }
}
//o espaço vai depender do valor da variavel n 













