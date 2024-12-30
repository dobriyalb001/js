console.log(`hello this is using backticks`);
const a =55;
let name="bhahsit";

console.log(`hello my name is ${a} and name is ${name}`)


let myname=`hellothisisthefirst`;

//OR const gname= new String("hola amigo")
//ye object deta h waps

console.log(myname.length);
console.log(myname.charAt(18));


console.log(myname.slice(-18,3));


//split and replace

const string11="hello.this.is.first.string"
console.log(string11.replace(/\./g,'-'));

let arr10=[];
let newstr=string11.replace(/\./g,'-');

arr10=newstr.split('-');
console.log(arr10);