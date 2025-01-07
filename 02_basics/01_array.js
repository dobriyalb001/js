//array >> shallow copy- direct refrence dete h (heap me variable ka)


/*is cheez ko bachane ke liye:

let arr1 = [1, 2, 3];
let arr = [...arr1];

//in6th line copy to krlge but dono directly kisi ek ke changes baaki me bhi reflect krdenge

//7th line using spread[...] operator >> arr independent h arr1 se

// meaning that if the array elements are primitive values (strings, numbers, etc.),
//  the copy is independent of the original array. 
//  However, if the elements are objects or arrays themselves, both arr and tasks will reference the same object or array.


// array methods to define

//const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
//const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


*/

const  myArr=[1,2,3,4,5];
const myArr2=myArr.join();


//shift() and unshift()
//shift >> array ki starting me jayega 
//unshift >> array ke aage se hi delete krega





//slice vs splice

//arr.slice(1,3) >>isme 3rd index included nahi hota h and original array me diff nahi ata h
//arr.splice(1,3)>> 3rd index included h and original array se ht jayega 1,2,3 index.

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);



const  check=[1,2,3,4,5];
console.log("Check is ",check);
console.log(check.splice(1,2))
console.log(check);


let items = [[1, 2],[3, 4],
    [5, 6]
  ];


console.log(Array.isArray(items));