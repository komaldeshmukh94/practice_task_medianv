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

// Async Javascript

// Callbacks
// Callback is a function passed as an argument to another function.
// In javascript Callback is needed to handle asynchronous Operation.

//Example
function displayname(name)
{
 console.log(name)   
}
function displayfullname(callback)
{
    callback("komal")
}
displayfullname(displayname)


// Callback Hell(pyramid of doom)
// When their is too many nested callback it is called callback Hell.

// Promise=>Promise is the solution of callback Hell.
// A promise is used to perform asynchronous operation
// Promise represent eventual completion or failure of a task.

// Promise has 3 states
// Pending=>Initial State(neither fulfilled nor pending).
// Fulfilled=>promise resolved successfully.
// Rejected=>promise rejected.

// coding example

let newpromise=new Promise((resolve,reject)=>{
  resolve("Promise Resolved Successfully")
})

// how to access result of a promise
// .then & .catch is used to access result of a promise.

newpromise.then((value)=>console.log(value)).catch((error)=>console.log(error))

// Methods of promise
// all=>promise.all=>Takes iterable of promises and return a single promise.
// if all promise are fullfilled it will return fullfilled.
// if anyone promise is rejected it will return rejected with first rejection

let newpromise1=new Promise((resolve,reject)=>{
    resolve("error")
})

let newpromise2=new Promise((resolve,reject)=>{
    resolve("error")
})

let newpromise3=new Promise((resolve,reject)=>{
    resolve("error")
})

// newpromise.then((value)=>console.log(value)).catch((error)=>console.log(error))

Promise.all([newpromise1,newpromise2,newpromise3]).then((value)=>{
   return console.log(value)
}).catch((err)=>console.log(err))

// promise.allSettled

// Wait for all promises to finish return the status of the promise.

let newpromise1=new Promise((resolve,reject)=>{
    resolve("error")
})

let newpromise2=new Promise((resolve,reject)=>{
    resolve("error")
})

let newpromise3=new Promise((resolve,reject)=>{
    resolve("error")
})

// newpromise.then((value)=>console.log(value)).catch((error)=>console.log(error))

Promise.allSettled([newpromise1,newpromise2,newpromise3]).then((value)=>{
   return console.log(value)
}).catch((err)=>console.log(err))

// output=>
//   [
//   { status: 'fulfilled', value: 'error' },
//   { status: 'fulfilled', value: 'error' },
//   { status: 'fulfilled', value: 'error' }
// ]

// promise.race()
// it also takes an iterable promise return the first resolved or rejected promise.

let newpromise1=new Promise((resolve,reject)=>{
    resolve("promise resolved 1")
})

let newpromise2=new Promise((resolve,reject)=>{
    resolve("promise resolve 2")
})

let newpromise3=new Promise((resolve,reject)=>{
    resolve("promise resolve 3")
})

// newpromise.then((value)=>console.log(value)).catch((error)=>console.log(error))

Promise.race([newpromise1,newpromise2,newpromise3]).then((value)=>{
   return console.log(value)
}).catch((err)=>console.log(err))

// output:-promise resolved 1

// promise.any()
// It takes iterable of promises resolve if any promise resolve give result as first fullfillment.
// rejects if "all" promises rejects.(ignore rejection only reject when all promises rejects.)

// Coding Example
let newpromise1=new Promise((resolve,reject)=>{
    reject("promise rejected 1")
})

let newpromise2=new Promise((resolve,reject)=>{
    reject("promise rejected 2")
})

let newpromise3=new Promise((resolve,reject)=>{
    reject("promise rejected 3")
})

Promise.any([newpromise1,newpromise2,newpromise3]).then((value)=>{
   return console.log(value)
}).catch((err)=>console.log(err))

// async/await
// async await is modern js syntax built on top of promise,it help use to write a cleaner readable syntax to show a asynchronous code in synchronous way.

let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first step")
    },3000)
})

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("second step")
    },5000)
})

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Third step")
    },7000)
})

async function display(){
    let result =await promise1
    console.log(result)
    let result1=await promise2
    console.log(result1)
    let result3=await promise3
    console.log(result3)
}
display()


// Error handling
// error is handled using try catch and finally block.

// 1.try block=>The code in which their is chance of error is written in try block.
// 2.catch block=>The error occur what code we have to execute is written in catch block.
// 3.finally block=>the code written in finally block will excute in any case either their will be error or not.


// Coding Example

let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first step")
    },3000)
})

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("second step")
    },5000)
})

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Third step")
    },7000)
})

async function display(){
    try{
    let result =await promise1
    console.log(resul)
    let result1=await promise2
    console.log(result1)
    let result3=await promise3
    console.log(result3)
    }
    catch(error)
    {
        console.log("error",error)
    }
    
}
display()

// Typescript
// javascript is a loosely typed language,that's why we use Typescript for typesafety.
// Typescript code will be converted to javascript.

// Types in TypesScript
// Boolean:-Used for true and false value.
let c:boolean=true;

// Number:-Used for both normal and floating point number.
let num:number=2;

// String:-Represent string value.
let str:string="komal";

// BigInt:-Represent Number larger than 2^53-1.


// Symbol:used to define unique value.
let key:symbol=Symbol("name")
let key1:symbol=Symbol("name")
obj={
  key:"komal"
}


// array in typescript
let str_arr:string[]=["a","b","c","d","e"]
str_arr.push("f")
console.log(arr)

// if readonly is used no operation will be performed on array.
let str_arr1:readonly string[]=["a","b","c","d","e"]
arr.push("f")
console.log(arr)
// Type inference => Type inference is a feature in  typescript  where typescript automatically defines the type of variable.

// Object in Typescript
const obj:{name:string,class:string,age:number}={
name:"abc",
class:"a",
age:20,
}
obj[name]=20

// How to define function in Typescript
function add(a:number,b:number):number
{
    return a+b
}
let result:number=add(1,2)
console.log(result)


// Typescript is a superset of javascript.
// Typescript is a development tool the code is compiled into javascript.
// Types in Typescript
// 1.null
// 2.undefined
// 3.Void
// 4.Object
// 5.Array
// 6.Tuple

// any=>it stop the type checking.





// Interface in Typescript
// Interface is used to define the structure of a object & function in Typescript.

// This structure can be reused for other object as well
interface Info{
    name:string,
    surname:string,
    age:number
}

let studentInfo:Info={
    name:"komal",
    surname:"Deshmukh",
    age:20
}

let employee:Info={
    name:"abc",
    surname:"xyz",
    age:23
}

// If we need to add more properties in interface structure for a object we can extend the interface and create a new specific interface.

interface studentInfo extends Info{
  className:string
}

studentInfo["className"]="A"
console.log(studentInfo)

// Output
/*
{
  "name": "komal",
  "surname": "Deshmukh",
  "age": 20,
  "className": "A"
} 
*/ 


// Union Type
// when we define multiple data type for a single variable then we use union and it is called union data type.


let x:string|number|boolean
x=true
console.log(x)


// type in Typescript
//we can use union with type

type a={
    c:string,
    d:string,
}
 type b={
    e:string,
    f:string,
 }

 type c=a | b

/*
type c={
 c:string,
 d:string,
 e:string,
f:string,
}
*/

// diffrence between type & interface
// interface=>can't use intersection.
// type=>can't use union.


// enum in typescript
// define set of named constant
// enum is used to define constant value.only constant value will be used any other value will not be used.
enum e_name{
firstname="komal",
lastname="Deshmukh",
}

let emp_name:e_name=e_name.firstname;

// optional props
// optional properties in typescript is a property which may or may not be provided.
// it is marked as ?

let obj:{name:string,surname?:string}={
name:"komal"
}

console.log(obj)

// In this example surname is optional.if name is not eneterd it will give a error.

// Api Contract.

interface Ratings {
  rate: number;
  count: number;
}

interface ResponseType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Ratings;
}

async function get(): Promise<ResponseType> {
  const result = await fetch("https://fakestoreapi.com/products/1");
  const response: ResponseType = await result.json();
  console.log(response);
  return response;
}

get();

// Generics in Typescript
// generics are used to create reusable component in typescript or function with help of which we can work with multiple "data types".

// Coding example.
function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(100);
identity<boolean>(true);

// Access Modifier
// public:accessed anywhere

class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user1 = new User("Komal");
console.log(user1.name);

// private:accessed only in same class.
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }
}

// protected:accessed in child class.
class Employee {
  protected salary: number;


  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  getSalary() {
    return this.salary; // Allowed
  }
}
const manager = new Manager(50000);
// manager.salary Not accessible outside


// classes in Typescript

// Classes in TypeScript are blueprints used to create objects with defined properties and methods.They support object-oriented programming by organizing and reusing code efficiently.

// coding example of classes
class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const student1 = new Student("Komal", 22);
console.log(student1.getDetails());

// constructor=>constructor is the first method invoked when a object is created.
// getDetails=>a function created called with help created object.