const obj={name:1,
            age:24,
            weight:50,
        };

        console.log(obj);


const keys=(Object.keys(obj));

Object.keys(obj);       //returns an array of string representing object keys.  [ 'name', 'age', 'weight' ]
Object.keys(obj);       //returns an array of string representing object values.  [ 1, 24, 50 ]
Object.entries(obj);    //returns an array in which each element is an array consisting of object key-value.  [ [ 'name', 1 ], [ 'age', 24 ], [ 'weight', 50 ] ]

Object.freeze(obj);         //Freezes an object, meaning it prevents any new properties from being added, 
Object.isFrozen(obj)        //existing properties from being removed, or any property values from being changed.
                            //This method prevents changes to the object, but it does not freeze nested objects (shallow freeze).
Object.seal(obj);           //can modify esisting properties but cannot add new properties or delete existing ones.
Object.isSealed(obj);

Object.preventExtensions(obj)  //new properties can not be added, existing can be mdoified or deleted
Object.isExtensible(obj);       //checks if extensible h ya n

console.log(Object.is(2, 2));       //used for comparison, NaN and -0 ko shi treat krta h (Nan=Nan and -0!=0 when checked through this)


const entries = [['a', 1], ['b', 2], ['c', 3]];     // key-value pair ke array se OBJECT bnane ke liye
const objNew = Object.fromEntries(entries);
// console.log(obj);  // { a: 1, b: 2, c: 3 }


const inheritOBJ = { a: 1 };                        //.hasOwnProperty() > apni khud ki property h to TRUE, 
                                                    // nahi h ya inherited h to FALSE
console.log(obj.hasOwnProperty('a'));  // true
console.log(obj.hasOwnProperty('b'));  // false

Object.getOwnPropertyNames(obj)                 //apni properties ke naam deta h array me


Object.assign(target, source1,source2,source3);     //target me sb source1/2/3 se lekr obj daaldega;

Object.assign({},obj1,obj2)             //khali object me daal denge
Object.assign(obj1,obj2)                //obj1 me changes krdega

