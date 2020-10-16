function isPositive(a){
    // var readline = require('readline')

    console.log(a);
    if( a == 0){
        return "Zero Error";
    }
    else if( a < 0){
        return "Negative Error";
    }
    else {
        return "YES";
    }

}
console.log(isPositive(7))