const arr=[1,2,3,4,5,6,7,8,9,10]
//  ...,-8,-7,-6,-5,-4,-3,-2,-1
//negative value me last se -1 indexing shuru hojati h

//Array methods:
//console.log(arr);

arr.push(11);   //this also inserts item and returns the new length of the array

// console.log(arr);
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10,
//    11
//  ]

let lastElement=arr.pop(); //returns last element from aray, and waha se delete krdeta h
// console.log(lastElement,arr);
// 11 [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]

let newLen=arr.unshift(-1);    //insert at the beggining   -> returns new length of the array
// console.log(newLen,arr);
// 11 [
//     -1, 1, 2, 3, 4,
//      5, 6, 7, 8, 9,
//     10
//   ]

let firstEle=arr.shift();    //removes first element and returns it
// console.log(firstEle,arr);
// -1 [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]



//DELETE 

//delete arr[index] >>element hta dega but length remains same

let deletedElements=arr.splice(4,6,11,12,13,14,15); //returns array of deleted elements. (start_index,count_till_delete, new_elements)
                                                    //original arry me changes krta h
    // console.log(`${deletedElements} \n Original array:\n ${arr}`);
    // 5,6,7,8,9 
    // Original array:
    // 1,2,3,4,11,12,13,14,15,10


//to insert elemets without any deleteion, set count =0;
arr.splice(4,0,5,6,7,8,9,10);   //4th index pr se kch delete mt kro, aur ye sb insert krdo
// console.log(arr);
// [
//     1,  2,  3,  4,  (yaha aakr krdia insert)5,  6,
//     7,  8,  9, 10, 11, 12,
//    13, 14, 15, 10
//  ]


// console.log(arr);
// [
//     1,  2,  3,  4,  5,  6,
//     7,  8,  9, 10, 11, 12,
//    13, 14, 15
//  ]


//arr.splice()          --returns an arry copying fromm starting index to end index (last wala included nahi hota)
//arr.splice(start,end) //end is exclusive

let slicedArr=arr.slice(0,5);        //to copy arrya elements, orig array me ko change nhi ata,
                                     // accepts negative value, 
let negSliced=arr.slice(-5);        //last se 5th index se end of array tk copy krdega


// console.log(slicedArr);
// [ 1, 2, 3, 4, 5 ]
// console.log(negSliced);
// [ 11, 12, 13, 14, 15 ]


//COPYING
//arr.concat(arr1,arr2,arr3)        >>returns an array with elements from arr,arr1,arr2

//arr.concat([3, 4], [5, 6]); // 1,2,3,4,5,6        >>if arr=[1,2], then sbko ek array me krdeta h , instead of array name yaha 
                                                    //directly arry h dedi [3,4] and [5,6]


//normally if arr.concat(obj_name) >> as a object hi hoga concatenate, but if [Symbol.isConcatSpreadable]: true, is present 
                                    // in object then poora spread hojayega
                                    // object should be array like 

                                    //let arrayLike = {
                                    //     0: "something",
                                    //     1: "else",
                                    //     [Symbol.isConcatSpreadable]: true,
                                    //     length: 2
                                    //   };
                                      


//copying using slice >
//arr.slice(0);

//Copying using spread operator
//let newArr=[...arr1,...arr2,"hello","bye",...arr3]           newArr= [elements of arr1,arr2,hello,bye,arr3 elements]

//arr.join()

// array ke saare elements ko join krke string for me deta h with default separator ',' >>no change in the original array

//console.count(arr.join());

//if you want to change default separator in string a '-'

// console.log(arr.join('-'));
// 1-2-3-4-5-6-7-8-9-10-11-12-13-14-15

//OR space
// console.log(arr.join(" "));
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

//sort                          --original array me changes le ayega
//arr.sort();

//to sort in reverse
//arr.sort((a, b) => b - a);

//reverse
//arr.reverse();

//arr.includes(3);               --TRUE agr element exists ;else FALSE
//arr.indexOf(3)                --Returns the index of the first occurrence of a specified element in an array, else -1

//arr.fill(value,start_index,end_index);        (last_index is not included), baki sbki value change krdega provided se


//arr.flat(depth);    /kha tk flat krni h array     [1,2,[3,4]] > [1,2,3,4]
//depth > kitne level tk

//[1, [2, [3, [4]]]] >> depth(2) >> [1,2,3,[4]]
//saari h krni h to arr.flat(Infinity)