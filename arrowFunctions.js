function modifyArray(nums){
    console.log(nums);
    var value =[];
    var cal;

    for(var i=0; i< nums.length; i++){
        if(nums[i] % 2 !=0){
            cal = nums[i] * 3;
            value.push(cal);
        }
        else{
            cal = nums[i] * 2;
            value.push(cal);
        }
    }
    return value;

}
console.log(modifyArray([1,2,3,4,5]))