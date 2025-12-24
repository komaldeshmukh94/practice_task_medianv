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

// creating a subarray from a array
arr.slice(0,2)

// Check it is array or not
arr.isArray()

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

// flat method
let new_arr=[[2,3],[2,1],[3,5]]
let res=arr.flat()
// res=[2,3,2,1,3,5]

// delete method 
delete new_arr[0]
//the deleted element place will be undefined


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


// Event Loop in Js

// javascript is a single threaded language to perform asynchronous operation in javascript event loop is used.

// Event loop manages multiple task without blocking the main thread.

// asynchronous operation
// fetching data from API.
// Setting Time for a specific task using setTimeout,setInterval.

// Working of event loop
//1.call stack=>used to perform function execution follow LIFO.

//2.Task Queue=>callback like setTimeout and setInterval are kept in Task queue until execution.

//3.Microtask Queue=>Microtask Queue has higher priority than task queue.used to execute Promises.

//4. Event Loop=>Event loop continuosly check call stack and Task Queue and MicrotaskQueue if any task is present in Task or microtask queue it push that task to call stack.

// Coding Example how event loop works

console.log("start")
setTimeout(()=>{
    console.log("setTimeout")
},1000)
const promise=new Promise((resolve,reject)=>{
    resolve("promise resolved")
})
promise.then((value)=>console.log(value))
console.log("end")

/*
start
end
promise resolved=>promise are kept in microtask queue for execution,execute first.
setTimeout=>send to web api ,kept in callback Queue for execution has less priority than microtask queue.
*/



// what is Web API
// setTimeout,setInterval,fetch,Local Storage,Session Storage

// setTimeout=>set a time after the time the callback will execute.

setTimeout(()=>{
  console.log("setTimeout executed")
},1000)

// setInterval=>set a Interval after the interval the callback will be executed.
 
setInterval(()=>{
  console.log("setInterval is executing after interval of 1 sec")
},1000)

// setImmediate=>when we need to execute task as soon as possible we use setImmediate function.

setImmediate(()=>{
  console.log("setImmediate executed")
},1000)

// Local Storage=>local storage is used to save permanent data in web storage(client side.)
// Use Cases=>Login authentication(to check user is logged in or not)

// Local storage Method
// setItem=>set key value pair
localStorage.setItem("username","Komal Deshmukh")

// getItem=>with key we can access value
localStorage.getItem("username")

// removeItem=>Remove key value pair
localStorage.removeItem("username")

// clear=>clear all key value pair
localStorage.clear()

// Session Storage=>session storage is used to save temporary data in web storage(client side)







