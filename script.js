// const arr=[1,2,3,4,5,6,7,8,9,10]
// // const result=arr.map(()=>{
    
// // })
// // console.log(result);
// const sum=(a)=>{
//    return a*2
// }
// const output=arr.map(sum)
// console.log(output);

// var num=12345;
// var lastdigit=0;
// var sumofalldigit=0;
// while(num!=0){
//    lastdigit=num%10;
//    sumofalldigit=sumofalldigit+lastdigit;
//    num=parseInt(num/10);
// }
// console.log(sumofalldigit);


//function constructor
// var fun =new Function('a','b','console.log(a+b)')
// fun(5,5)

//function declaration
// function add(num1,num2){
//    return num1+num2;
// }
// console.log(add(2,5))

// //function expression
// var add2=function (num1,num2){
//    return num1+num2;
// }
// console.log(add2(2,10))

// //function constuctor
// var add3=new Function ("num1","num2","{return num1+num2}");
// console.log(add3(2,15))

//that run as soon as declare know as IMEDIATE INVOKE FUNCTION
// (function(a,b){
//    console.log(a+b)
// })(2,3)



//first class function 
//function can be pass as a argument to another function 
//function can be return by another function
//function can be assign as a value


// 1 first point
// function foo(){
//    console.log('my name is amit');
// }
// function greet(param){
//    param()
// }
// greet(foo);


//3 point function can assign a value  function expression is a first class function
// var foo1=function(){
//    console.log('hello amit');
// } 
// foo1() //this is first class function


//function that return a function  is called highorder function

// function fun1(){
//    return function fun2(){
//       console.log('hello kumar');
//    }
// }
// // fun1()()
// const sayhi=fun1()
// sayhi()





//highorder function  => a function that accept another function as an argument is khow as highorder function
//a function that return a function is khow as highorder function

// function submithomework(){
//    return 'hello amit'
// }
// function homework(param,name){
//    console.log(param(),name)
// }
// homework(submithomework,'javascript') /// homework is a highorder function




//closure  where we can accesss another function variable

// var a =10;
// var b=20;
// function fun1(){
//    console.log(a);
//    function innnerfun(){
      
//       console.log( "sum of"+ ""+b);
//    }
//    innnerfun()
// }
// fun1()



//map => map is a javascript method to transform the array which will itarate throught each and every element

// var arr=[1,2,3,4,5,6,7,8,9,10]
// const result =arr.map( sum)


// function sum(x){
//    return x*2
// }
// console.log(result);
// var arr=[1,2,3,4,5,6,7,8,9,10]
// const result=arr.map((x)=>x*2)
// console.log(result);

//filter

// var arr=[1,2,3,4,5,6,7,8,9,10]
// const result=arr.filter((x)=>x>2)
// console.log(result);

// const arr=[1,2,3,4,5]
// arr.push(6)
// console.log(arr)
// const arr=[1,2,3,4,5]
// arr.pop()
// console.log(arr)

// const arr=[1,2,3,4,5]
// arr.unshift(9)
// console.log(arr)

// const arr=[1,2,3,4,5]
// arr.shift()
// console.log(arr)


// const arr =[1,2,3,4,5]
// const result = arr.some((x)=>x%2==0)
// console.log(result);

// const arr =[1,2,3,4,5]
// const result = arr.every((x)=>x%2==0)
// console.log(result);


// const arr =[1,2,3,4,5]
// const result = arr.slice(1,3)
// console.log(result);
// console.log(arr);

// const arr =[1,2,3,4,5]
// const result = arr.indexOf(3)
// const result1 = arr.lastIndexOf(5)
// console.log(result1);
// console.log(result);

const arr=['amit','kumar']
const result=arr[0][2]
console.log(result);





