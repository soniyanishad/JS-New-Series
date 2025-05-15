

//sort

let arr=[20,10,5,4,40];

arr.sort();
console.log(arr); //sorting method fails for numbers, it sorts them as strings
 //output: [10, 20, 4, 40, 5]

 let data=["apple","banana","orange","kiwi","grape"];
    data.sort(); 
    console.log(data); //output: [apple, banana, grape, kiwi, orange]

//reverse

let arr1=[10,40,30,60,20];
arr1.reverse(); 
console.log(arr1); 

arr1.pop(); //removes last element
console.log(arr1); //output: [20, 60, 30, 40]

arr1.push(100); //adds element at the end of the array
console.log(arr1); //output: [20, 60, 30, 40, 100]

arr1.shift(); //removes first element
console.log(arr1); //output: [60, 30, 40, 100]

arr1.unshift(200); //adds element at the beginning of the array
console.log(arr1); //output: [200, 60, 30, 40, 100]

arr1.concat([1,2,3]); //adds elements at the end of the array
console.log(arr1); //output: [200, 60, 30, 40, 100, 1, 2, 3]


//multiple arrays can be concatenated using concat method
let arr2=[1,2,3];
let arr3=[4,5,6];
let arr4=[7,8,9];
let arr5=arr2.concat(arr3,arr4); //concatenating multiple arrays
console.log(arr5); //output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//join method joins all elements of an array into a string

let arr6=[1,2,3,4,5];
let str=arr6.join("-"); //joining elements with "-" separator
console.log(str); //output: 1,2,3,4,5

//splice method is used to add or remove elements from an array

let arr7=[1,2,3,4,5];
arr7.splice(2, 0, 6, 7); //adding elements at index 2
console.log(arr7); //output: [1, 2, 6, 7, 3, 4, 5]

//slice method is used to extract a portion of an array
let arr8=[1,2,3,4,5];
let slicedArr=arr8.slice(1, 4); //extracting elements from index 1 to 4 (not inclusive)
console.log(slicedArr); //output: [2, 3, 4]

let sliceArr2=arr8.slice(-4,-1); 
console.log(sliceArr2); //output: [2, 3, 4]


var data1=["neha","kunal","mohit","rahul","priya"];
    //  data1.splice(4,1,"unnati","javed");
    //  data1.splice(5,0,"unnati","javed");
    // data1.splice(data1.length,0,"unnati","javed"); 
    data1.splice(-2,0,"unnati");
     console.log(data1);

   let data2=[1,2,3,4,5,6,7,5,9,10];

   console.log(Array.isArray(data2));



   let data3="soniya";
   if(Array.isArray(data3))
   {
    console.log("It is array");
    
   }
   else
   {
    console.log("It is not an array");
    
   }

console.log(data2.indexOf(5)); //output: 4


console.log(data2.lastIndexOf(5)); //it returns the last index of the element in the array

console.log(data1.includes("Kunal"));//output: false

console.log(data1.toString()); //convert into string

//join and toSting methods are same,only the difference is join method  can use seperators(-,*/.....) which is not in toSting method

let arr9=[1,20,45,78];
let res=arr9.fill(300,1,3);
console.log(res);

//difference between recursion and callback function

function child(a)
{
  console.log(a);
  
}
function parent(name)

{
  let data="soniya";
  name(data); //callback function
}
parent(child); //output: soniya


function parent1(name)
{
  let data4="soniya";
  return name(data4); //callback function
  
}
 let data4=parent1((a)=>{ return a;});

 console.log(data4); //output


//some method checks if at least one element in the array passes the test implemented by the provided function. It returns true or false.
// let arr10=[18,20,45,78];
// let res1=arr10.some((a)=>{ return a>=78;})
// console.log(res1);//output:true


let arr10=[18,20,45,78];
let res1=arr10.some((a)=>{ return a>=80;})
 console.log(res1); //output:false

//every method checks if all elements in the array pass the test implemented by the provided function. It returns true or false.
let arr11=[22,2,4,7];
let res2=arr11.every((a)=>{ return a>=18;})
console.log(res2); //output:false
 let res3=arr11.every((a)=>{ return a>=2;})
  console.log(res3); //output:true

  //find method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
  let arr12=[22,23,4,7];
  let res4=arr12.find((a)=>{ return a>20;}) //it returns the first element which is greater than 20
  console.log(res4); //output:22
  let res5=arr12.find((a)=>{ return a>30;}) //it returns undefined as no element is greater than 30
  console.log(res5); //output:undefined

  //findIndex method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
  let arr13=[22,23,4,7];
  let res6=arr13.findIndex((a)=>{ return a>20;}) //it returns the index of the first element which is greater than 20
  console.log(res6); //output:0

  //filter method creates a new array with all elements that pass the test implemented by the provided function.
  let arr14=[22,23,4,7];
  let res7=arr14.filter((a)=>{ return a>20;}) //it returns the array of elements which are greater than 20
  console.log(res7); //output:[22,23]

  //forEach method executes a provided function once for each array element.
  //if we use break statement in forEach loop, it will not work as expected. It will not break the loop. it throws an error.
  //forEach loop does not return anything. It returns undefined.

  let arr15=[2,4,6,65,5,78,89];
  arr15.forEach((a)=>{ 
    console.log(a); }) //output:2 4 6 65 5 78 89

    // for (let i=0;i<arr15.length;i++)
    // {
    //   console.log(arr15[i]);
      
    // }

    //map method creates a new array populated with the results of calling a provided function on every element in the calling array.
    
    let arr16=[2,4,6,65,5,78,89];
    let res8=arr16.map((a)=>{ return a*2;}) //it returns the array of elements which are multiplied by 2
    console.log(res8); //output:[4, 8, 12, 130, 10, 156, 178]

    //difference between filter and map method 
    


    //map and filter example
    const numbers = [0,1, 2, 3, 4, 5];

    //using filter keep only even numbers
    const filtered = numbers.filter(num => num%2===0);

    //using map+filter- map returns numbers or undefined,then filter removes undefined values
    const mappedAndFiltered = numbers.map(num => num%2===0 ? num : undefined).filter(Boolean);// removes undefined values

    console.log("Using filter:"+filtered); //output: [ 0, 2, 4]
    console.log("Using map+filter:"+mappedAndFiltered); //output: [ 2, 4]
    

    //write some function funcatinality using logic of pure javascript without using callback function
    
//    let numbers1=[5,6,8,9,2];

//    let isValue=false;
   

//    for(let i=0;i<numbers1.length;i++)
//    {
//     if(numbers1[i]%2==0)
//     {
//         isValue=true;
        
//         break;
//     }
//    }

// console.log(isValue); 

// let numbers1=[5,2,9,7,9];

//    let isValue=false; 

//    for(let i=0;i<numbers1.length;i++)
//    {
//     if(numbers1[i]%2==0)
//     {
//         isValue=i;
        
//     }
//    }

// console.log(isValue); //output: 1




// push functionality using pure javascript

let arr17=[1,2,3,4,5];
let value=100;
let index=arr17.length; 
arr17[index]=value; 
console.log(arr17); 


// let data5=()=>{num*2;};

// let value=data();
// console.log(value); 

let data6="soniya";
let data7="soniya";

console.log(data6==data7); //output:true bcause it compares the value of the string which is primitve data type

let arr18=[1,2,3,4,5];
let arr19=[1,2,3,4,5];

console.log(arr18==arr19); //output:false because it compares the reference of the array which is non-primitive data type.

let data8="javed";
let data9=data8;

console.log(data9);//output:javed



//shallow copy and deep copy

//cloning with spread operator
let arr20=[1,2,3,4];
let arr21=[...arr20]; //shallow copy using spread operator,it copies the reference of the array


arr20.push(100); //adding element in the original array

console.log(arr20); //output: [1, 2, 3, 4, 100]
console.log(arr21); //output: [1, 2, 3, 4]


//cloning with slice method

let arr22=[1,2,3,4];
let arr23=arr22.slice(); 

arr22.push(100); 
console.log(arr22); //output: [1, 2, 3, 4, 100]
console.log(arr23); //output: [1, 2, 3, 4]

//cloning with Array.from method
let arr24=[1,2,3,4];
let arr25=Array.from(arr24);

arr24.push(100);
console.log(arr24); //output: [1, 2, 3, 4, 100]
console.log(arr25); //output: [1, 2, 3, 4]

//cloning with concat method

let arr26=[1,2,3,4];
let arr27=[].concat(arr26); 

arr26.push(100);
console.log(arr26); //output: [1, 2, 3, 4, 100]
console.log(arr27); //output: [1, 2, 3, 4]

//cloing with map method
let arr28=[1,2,3,4];
let arr29=arr28.map(x=>x);

arr28.push(100);
console.log(arr28); //output: [1, 2, 3, 4, 100]
console.log(arr29); //output: [1, 2, 3, 4]

//cloning with filter method  (with always true condition)

let arr30=[1,2,3,4];
let arr31=arr30.filter(()=>true); //it returns all elements of the array

arr30.push(100);
console.log(arr30); //output: [1, 2, 3, 4, 100]
console.log(arr31); //output: [1, 2, 3, 4]



//object

// let student={
//   name:"soniya",
//   age:22,
//   city:"delhi",
//   course:"React",
//   address:["India","Delhi"],
//   email:{data:"part1",data2:"part2"},
//   admin:function(){"Hello Admin"}
// }
// console.log(student.admin()); //output: Hello Admin
// console.log(student.name); //output: soniya
// console.log(student.address[0]); //output: India


let student={
  name:"soniya",
  latName:"Nishad",
  age:22,
  city:"delhi",
  course:"React",
  address:["India","Delhi"],
  email:{data:"part1",data2:"part2"},
  fullName:function(){"Hello "+this.name+" "+this.latName;}, //using this keyword to access the object properties
}
console.log(student.fullName()); //output: Hello soniya Nishad



//scope based on block and functional

// var a="soniya";  // global scope in context of window object
let a="soniya";

function getName()
{
  console.log(a);
  
}
getName();

console.log(a);
console.log(this);



// function getName1(){

//   if(true){
//     let age=22;
//   console.log(age); //output 22
//   }
//    console.log(age);// it gets an error
// }
// getName1();

function getName2(){

  if(true){
    var age=22;
  console.log(age); //output 22
  }
   console.log(age);//  output 22
}
getName2();

//  --------------------------------------------------------------------------------------


let name="soniya";

let obj={
  // name:name, same 
  name,
  age:22
}
console.log(obj);
console.log(obj.age); // called dot notation
console.log(obj["age"]); //called bracket notation


let obj2={
  age:22,
  "get name":"soniya"
}
console.log(obj2["get name"]);  //bracket notation is used for variableContaining key also which is not possible in dot notation

let person={
  name:"soniya",
  age:25,
  "home address":"Delhi",
  "123code":"xyz"
}
console.log(person["name"]);
console.log(person["home address"]);
console.log(person["123code"]);

//* key stored in variable(imp-mostly used in  projects)

let rol="admin";

let obj3={
  admin:"sonam"
}
console.log(obj3[rol]);



let a1="age";

let obj4={
  [a1]:22,
  name:"soniya"
}
console.log(obj4);
console.log(obj4.age);





