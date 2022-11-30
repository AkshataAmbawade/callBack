// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished
// first example:
// const greetings=()=>{
//     return "Good Morning"
// }
// const students=(name,callback)=>{
//     // return `${name} ${callback}`
//     return `${callback} ${name}`
// }
// console.log(students("Akshata",greetings()));


// second Example:
// const sayHi=()=>{
//     return "Hiiiii"
// }
// const talk=(name,callback)=>{
//     return `${callback} ${name}`
// }
// console.log(talk("Smitali",sayHi()));


// Third Example:
// const isOdd=(number)=>{
//     return number %2 ==1
// }
// const Numbers=(numbers,callback)=>{
//     const result=[];
//     for(let num of numbers){
//         if(callback(num)){
//             result.push(num)
//         }
//     }
//     return result
// }
// const numbers=[1,2,3,4,5,6,7,8,9,0];
// console.log(Numbers(numbers,isOdd));

// forth Example:
// const isEven=(num)=>{
//     return num %2==0
// }
// const Numbers=(numbers,callback)=>{
//     const result=[];
//     for(let num of numbers){
//        if(callback(num)){
//         result.push(num)
//        }
//     }
//     return result
// }
// const numbers=[1,2,3,4,5,6,7,8,9,0]
// // console.log(Numbers(numbers,isEven));

// const isOdd=Numbers(numbers,function(num){
//     return num %2==1
// })
// const isEven=Numbers(numbers,function(num){
//     return num %2==0
// })
// console.log(isOdd);
// console.log(isEven);


// const sum=function (a,b){
//     return a+b;
// }
// console.log(sum(1,2))

// const talk= function(fx){
//     return fx();
// }
// const sayHi=function(){
//     console.log("hi");
// }
// talk(sayHi)

// const calc=function(fx,a,b){
//     return fx(a,b)
// }
// const sum=function(a,b){
//     return a+b
// }
// const diff=function(a,b){
//     return a-b;
// }
// console.log(calc(sum,1,2));
// console.log(calc(sum,1,5));
// console.log(calc(diff,4,2));


// const greetings =()=>{
//     a= "Hello"
//     return a
// }

// const User =(name,callback)=>{
//     let hello =  `${callback()} ${name}`
//     console.log(hello)
// }

// User("Vedant",greetings)

// const greetings=()=>{
//     return "Good Morning"
// }
// const users=(name,callback)=>{
//     return username= `${callback} ${name}`
// }
// console.log(users("Akshata",greetings()));

// function myFirst() {
//    console.log("Hello");
//   }

//   function mySecond() {
//    console.log("Goodbye");
//   }

//   mySecond();
//   myFirst();

// const filter=(numbers)=>{
//     let result=[];
//     for(let num of numbers){
//         if(num %2 !=0){
//             result.push(num)
//         }
//     }
//     return result;
// }
// const numbers=[1,2,3,4,5,6,7,8,9]
// console.log(filter(numbers));

// const filter=(numbers)=>{
//     const result=[];
//     for(let num of numbers){
//         if(num%2 !=0){
//             result.push(num)
//         }
//     }
//     return result
// }
// const numbers=[1,2,3];
// console.log(filter(numbers));

// const odd=(numbers)=>{

//     return numbers%2!=0
// }

// function isOdd(number) {
//     return number % 2 != 0;
// }

// function filter(numbers, callback) {
//     let results = [];
//     for (const number of numbers) {
//         if (callback(number)) {
//             results.push(number);
//         }
//     }
//     return results;
// }
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// console.log(filter(numbers, isOdd));


// const oddNumbers=(numbers)=>{
//     return numbers % 2 !=0;
// }

// const filter=(numbers,callback)=>{
//     const result=[];
//     for(let num of numbers){
//         if(callback(num)){
//             result.push(num)
//         }
//     }
//     return result
// }
// let numbers=[1,2,3];
// console.log(filter(numbers,oddNumbers));

// const evenNum=(n)=>{
//     return n % 2 == 0;
// };
// const Numbers=(numbers ,callback)=>{
//     const result=[];
//     for(let num of numbers){
//         if(callback(num)){
//             result.push(num)
//         }
//     }
//    return result
// }
// let numbers=[1,2,3,4,5,6,7,8,9,0]
// console.log(Numbers(numbers,evenNum));
// const oddNumbers=Numbers(numbers,function(number){
//     return number % 2 !=0
// })
// console.log(oddNumbers);

// const isEven=Numbers(numbers,function(num){
//     return num%2==0
// })
// console.log(isEven);
// const oddNumbers=Numbers(numbers,(num)=> num%2==1)
// console.log(oddNumbers);
// const isEven=Numbers(numbers, (num)=>num%2==0);
// console.log(isEven);

