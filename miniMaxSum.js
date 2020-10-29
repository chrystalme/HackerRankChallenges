/**Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.**/
function miniMaxSum(arr) {
    var sum = 0;
    var new_i = 0;
    let j = 0;
    var new_Arr = [];
    let i = 0;
    while(i < arr.length){
      sum += arr[i];
      i += 1;
    }
    console.log('The sum of the array is '+sum)
    while(j < arr.length){
      new_i = sum - arr[j];
      // console.log(new_i);
      new_Arr.push(new_i);
      j += 1;
    }
    console.log('The sum difference of each element is ' + new_Arr);
    new_Arr.sort((a,b)=>(a-b));
    for(let t = 0; t < new_Arr.length; t += 1){ 
      var max = new_Arr[0];
      var min = new_Arr[0];     
           if(new_Arr[t] > max) {
             max = new_Arr[t];
           }else{
             min = new_Arr[t];
           }      
    }
   
    console.log(min, max);
     return new_Arr;
}
    
arr = [7, 69 ,2, 221, 8974]
miniMaxSum(arr)
