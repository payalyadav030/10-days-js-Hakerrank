function factorial(n){
    var num =1;
    for(var i=1; i<=n; i++){
         num = num * i
         console.log("n",num)
    }
    return num;
}
console.log(factorial(4))


// function main() {
// const n = +(readLine());

// console.log(factorial(4));
// }