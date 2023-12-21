function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

console.log(addUpTo(3))//6
console.log(addUpTo(6))//21
console.log(addUpTo(100))//5050

console.log('========================================')

function addUpTo2(n){
    return n * (n + 1) / 2
}

console.log(addUpTo2(3))//6
console.log(addUpTo2(6))//21