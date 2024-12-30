let score ="hitesh";

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)   //typeof jb return krta h to number krta h , conversion me capital 'Number' use krte h
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33       string me agr bs numbers h to easily convertt hoajyegi
// "33abc" => NaN   string me number ke alawa kch h to, 'typeof' > number h dega but jb value dekhoge to NaN ayegi
//  true => 1; false => 0 boolean value ko convert kroge number me to

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false          agr string empty nahi hai and boolean me convert kri h to >> hmesha true h ayegi value
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
//

/////////////       operations  ///////
let var1 = 3;
let negval =-var1;

//console.log(negval);

console.log(3+negval);

let str1="hello";
let str2="javascsript"

console.log(str1+" "+str2);


// agr string first h to saari string me convet hojayegi, 
console.log("hello"+3 +2 +"baby")

//but agr aage number h to wo calculate hoga then string bnegi poori
console.log(3+2+"hellobaby"+44)


console.log(true);


// conversion with +

console.log(+true); // '+' ne convert krdia numric me 

//console.log(true+)    >>isme error dega

console.log(+" ")    //0 ayega
console.log(Number(false));


//>> study precedence operator, pre post incerement decrement. backticks 

console.log("")

let var2=10;
console.log(var2++);
console.log(var2);

console.log(`variable is ${var2}`);

// using backticks we can use calculation as well `${a*b}`

