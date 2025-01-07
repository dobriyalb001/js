//basic conversions ya comparison to ho jata h


//>= and <=  NULL ko '0' me convert krdeta h isliye true deta h 
//<,>,== null k bina convert kre comaprison krte h and hence false dete h 
console.log(null<=0)
console.log(null>=0)
console.log(null==0)

//strict checking 

console.log("2"===2);
console.log("2"==2);


//bigInt

const bigNumber=123123123123123123123n;

const arr=["hello", 34,'myname is '];
console.log("\n"+arr);

console.log(typeof arr);



let num1, num2, num3

num1 = num2 = num3 = 2 + 2

//isme num1, num2 and num3 ki value same 4 hojayegi

// https://262.ecma-international.org/5.1/#sec-11.4.3