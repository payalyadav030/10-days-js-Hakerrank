// function getDayName(dateString){
//     var dayName="";
//     //console.log(dateString);

//     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     for(var j=0; j<days.length; j++){
//         for(var i=0; i<dateString.length; i++){
//             var d = new Date(dateString[i]);
//             var n = d.getDay();
           
//             dayName = dayName+  days[n] + '\n';       
//         }
//         return dayName;
//     }  

// }
// console.log(getDayName(["08/21/2020","11/10/2010"]))




function getDayName(dateString) {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = new Date(dateString).getDay();
    //console.log(day)
    
    return weekDays[day];
}
console.log(getDayName([ "08/22/2020"]))