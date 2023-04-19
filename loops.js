//print marks ok student
//using for loop
let marks={
  harry:43,
  dinesh:78,
  deven:67,
}

for(let i=0;i<Object.keys(marks).length;i++){
  console.log("the mark of "+Object.keys(marks)[i]+" is "+marks[Object.keys(marks)[i]])
}

//using for in loop
for (let key in marks){
  console.log(" the marks of "+key+" is " +marks[key])
  
}


//enter the number until the correct number enter
//using while loop

// 

//write a function which gives mean of 5 numbers
function mean(a,b,c,d,e) {
  return (a+b+c+d+e)/5
}

console.log(mean(1,2,3,4,5))
let num = [1, 2, 3, 44, 55, 3, 5]

//forEach loop
num.forEach((Element) => [
  console.log(Element+1)
])
