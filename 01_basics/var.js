const a= "hello this is a comnnstat string"; //constant value cant be changed
let letvar = "this is let "                 //used to declare variables

var var1= 55;
// isko use krna chod dia h cause of issue in funcitonal and block scope


var2= 100;

let name2;                                   //bina initialisation ke undefined deta h 


console.log(a);

//to print all the values ek sath

console.table([a,letvar,var1,var2,name2]);

//typeof

//console.log(typeof"var2")

let datatype=typeof"var2";
console.log(datatype);



console.log(typeof null);   //object 
 //primitive ke alawa baaki sb js ke liye object h, NULL> object hone special case h.


console.log(typeof undefined);   //undefined 


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

console.table([name,age,isLoggedIn,state]);

