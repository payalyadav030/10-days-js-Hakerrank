function checkStr(input){
  var string=  input[0]
  console.log(string)

  str1 = ["a","e","i","o","u"];
  str2 = ["b","c","d","f","g"]
  str3 = ["h","j","k","l","m"]
  str4 = ["n","p","q","r","s","t","u","v","w","x","y","z"]

  console.log(str1)

  for(var i=0; i<str1.length; i++){
      if(string == str1[i]){
          return 'A';
      }
  }
  for(var i=0; i<str2.length; i++){
    if(string == str2[i]){
        return 'B';
    }
}
for(var i=0; i<str3.length; i++){
    if(string == str3[i]){
        return 'C';
    }
}
for(var i=0; i<str4.length; i++){
    if(string == str4[i]){
        return 'D';
    }
}



}
console.log(checkStr('yujkl'))