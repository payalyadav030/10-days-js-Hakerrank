function regexVar(re){
    console.log(re);
    var str = re[0];
    //console.log(str)
    var last;

    var vowel = ["a","e","i","o","u"];

    for(var i=0; i<vowel.length; i++){
        if(re[0] != vowel[i]){
            return false;
        } 
        
        }  
    

    




}
console.log(regexVar('abca'))