function aVeryBigSum(ar){
    //console.log(ar);
    var sum =0;

    for(var i=0; i<ar.length; i++){
        sum = sum + ar[i]

    }
    return sum;

}
console.log(aVeryBigSum([1000000001,1000000002, 1000000003, 1000000004,1000000005]))