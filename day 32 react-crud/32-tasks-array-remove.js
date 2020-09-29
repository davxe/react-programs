const numbers=[10,20,30,40,50]
//console.log(numbers.splice(2,1)) output:[ 30 ]
// we not use splice method here because we want to show the rest of the element in the array but splice return the deleted element so we use the concept of filter
const result=numbers.filter(n=> n!=30)// we can use this way to remove an array element and show the rest of the element
console.log(result)//output : [ 10, 20, 40, 50 ]