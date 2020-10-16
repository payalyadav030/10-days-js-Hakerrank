function loops(s){
    
  
    var store = ""
   
    str1 = ["a","e","i","o","u"]
    str2 = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]

    for(var i=0; i<s.length; i++){
        for(var j=0; j<str1.length; j++){
            if(s[i]== str1[j]){
                store = store + s[i]+ '\n';
                
            }  
        }   
    }
    
    
    for(var i=0; i<s.length ; i++){
        for(j=0; j<str2.length; j++){
            if(s[i] == str2[j]){
                store = store + s[i] + '\n';
            }
        }
    }
    
     console.log(store)
     //console.log(value);


}
console.log(loops('javascriptloops'));