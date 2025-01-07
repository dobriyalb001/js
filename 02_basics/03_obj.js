
const obj={name:"hello",
            lastn:"dob",

            fullname: {
                usefname:{
                    firstn:"baby",
                    lastname:"hello-2",
                }
            }
}

console.log(obj);
console.log(obj.fullname?.usefname.lastname); //check krleta h pehle h ki obj me fullname h tbhi aage jao


console.log("\n");
const ob1 ={1:"a", 2:"b"};
const ob2={3:"a", 4:"b"};
const ob3 ={5:"a", 6:"b"};

const newObj=Object.assign({},ob1,ob2,ob3);
console.log(newObj);
console.log(ob1);