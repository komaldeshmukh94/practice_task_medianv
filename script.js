// ES6  concepts

// 1.let
let a=2
console.log(a)
// let is introduced in ES6 has block scope.
// let can be reinitialized not redeclared.
// let is saved in temporal dead zone in hoisting case.

// 2.const
const b="komal"
console.log(b)
// const is introduced in ES6 has block scope.
// const can not be reintialized not redeclared.
// const is saved in temporal dead zone in hoisting case.


// 3.Arrow function
// arrow function is used to write the function in shortest way.
// arrow function does not have its own this context.

let sum=(a)=>{
    console.log(`Arrow function ${a}`)
}
sum(a)

// 4.template literal
//used as the modern javascript string ,used for string interpolation.

console.log("komal")
console.log(`komal Deshmukh`)

// 5.Array in  JS
// Initializing Array
let arr=[1,2,3] 

// Adding element in array
arr.push(4)

// Adding element at starting of array
arr.unshift(0)

//Remove element from the end of array
arr.pop()

// Remove element from starting of array
arr.shift()

// splice method replace or remove array element from a index.
arr.splice()

//toString=>used to convert array to string
arr.toString()

//concat=>used to concat 2 array
let arr_a=[1,2,3]
let arr_b=[4,5,6]

a.concat(b)
// result=[1,2,3,4,5,6]

// destructuring 
// Used to unpack value from array,properties from object.
let[x,y]=[1,2]

// destructuring of object
let obj={
  name:"komal",
  surname:"Deshmukh"
}

let {name,surname}=obj
console.log(name,surname)


// Rest Operator
let [a,b,...rest]=[1,2,3,4,5,6]

// rest=>[3,4,5,6]
console.log(rest)
// rest return the array.

// Spread Operator
// Spread operator is used to expand the items of a iterable like array.
// spread operator is used to create the copy the shallow copy of array.
// spread operator create shallow copy of an object.

let arr1=[1,2,3]
let arr2=[4,5,6]

let arr3=[...arr1,...arr2]
console.log(arr3)
