let array = [10 ,20 , 13 , 15 ,17 , 21];
let student = ["reza","sana","samin", "mahsa","ali"];

let result = array.find(function(harchi){
  return harchi == 20
});
// console.log(result);


let result2 = array.find((m)=>{
 return m < 13 ;
})
console.log(result2)

let result3 = array.filter((number)=>{
    return number > 13
})
console.log(result3)

let result4 = student.filter((std)=>{
return std.length === 5
})
console.log(result4)
