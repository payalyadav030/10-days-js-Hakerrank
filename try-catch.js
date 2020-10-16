function reverse(s){
    console.log(typeof(s))
    // if( s == ""){
        //console.log("ok")

        if(Number.isInteger(s) == true){
            console.log("s.split is not a function")
            return s;
        }
        var str =  s.split( '' ).reverse().join( '' );

    return str;

}
console.log(reverse(1234))
////////////////////////
//  TRY and catch :


try {
    var splitString = s.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    console.log(joinArray);
}
catch (error)
    {
       
        console.log(error.message);
        console.log(s);
    }