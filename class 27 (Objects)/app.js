//01) Array
var stdArr = ["John Doe", 26, 28, "Web and App", "male",null, undefined];
// Array Collection Of Data But Ye Undefined Collection Of Data Hai
console.log(stdArr);
// Array index number se chalta hai 
// 02)
 for(var val of stdArr){
    console.log("stdArr", val);
}
//Array main for of loop work karti hai




//03) Objects 
var stdObj ={
    name : "sherry",
    age : 20,
    id : 28,
    coursName : "web and App",
    gendar : "Male",
    email : null,
    result : undefined,
}
// Objects BH collection Of Data hai but ye defined Data hai
console.log(stdObj);
// Object key se randor hota hai



//04) Object main ham for in loop work krta hai
for (var key in stdObj){
    console.log(key, stdObj[key]); // array notation lagani hOgi otherwise properties undefined ayegi
}
// key ke ilawa bh koi si bh variable define kr sakte hain 




// 05)  object main se koi value delete  krna hoto
 delete stdObj.name


//06) Objects Main Value Check krne ke lye 
var Check = "gendar" in stdObj;
console.log("check", Check);
// 2osra way bh hai check  krne ke lye
console.log(stdObj.hasOwnProperty("gendar"));

// 07) Array Notation and object notation se key ki value pata kr sakte hain
console.log("Object", stdObj["gendar"]);
console.log("object", stdObj.age);

// array main key value pata krne ke lye
console.log("Objects", stdArr[0]);



var std1 = {
    name : "Ubaid",
    age : 20,
    id : 686832,
    coursName : "Flutter",
    gendar : "male",
    email : null, 
    result : undefined,
}
var std2 = {
    name : "Wasiq",
    age : 19,
    id : 8349,
    coursName : "Web and App",
    gendar : "male",
    email : null,
    result : undefined,
}

var std3 ={
    name : "Sherry",
    age : 20,
    id : 212561,
    coursName : "Mobile and Web",
    gendar : "male",
    email : null,
    result : undefined,
}
// Array
var stdArr = [std1, std2, std3];
console.log(stdArr);


// 08) Easy Way Concentation 
var firstName = "Jaffar";
var lastName = "Aman";
var fullName = firstName + " " + lastName;
var fullName = `${firstName}  ${lastName}`
console.log(fullName);
console.log("My Full Name is " + firstName + " " + lastName);
// Easy Way 
console.log(`My full name is ${fullName}`);

// 09)Dynamic UI
var parent = document.getElementById("parent");
var temp  = "Hello Class"
parent.innerHTML = `
<table border="1">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Emai</th>
    </tr>
    <tr>
        <td>100</td>
        <td>Sherry</td>
        <td>lkhi98ew@gamil.com</td>
    </tr>
    <tr>
        <td>101</td>
        <td>shahmeer</td>
        <td>iohioew@gmail.com</td>
    </tr>
</table>
`



var userName = prompt("ENter Your Username");
var a = `my username is ${userName}`;
console.log("userName", a);



var UI = `<table border>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
        </tr>
        <tr>
            <td>100</td>
            <td>Jaffar Aman</td>
            <td>23</td>
            <td>jaffar@gmail.com</td>
        </tr>
    </table> `


document.write(UI)

var stdArr =[
    {
        id : 100,
        name : "Sherry",
        age : 20,
        email : null,
    },
    {
        id : 101,
        name : "Shahmeer",
        age : 20,
        email : null,
    },
    {
        id : 192,
        name : "Ubaid",
        age : 20,
        email : null,
    },
]


var tbody = document.getElementById("tbody");
for (var i = 0; i < stdArr.length; i++){
    var obj = stdArr[i]
    console.log(obj, "stdArr obj");     
    tbody.innerHTML = `<tr>
                   <td> ${obj.id} </td>
                   <td> ${obj.name} </td>
                   <td> ${obj.age} </td>
                   <td> ${obj.email} </td>
                   <td onclick="editRow(${i})" > <button>EDIT</button> </td>
    </tr>`
}




var std2 = {
    firstName : "Meer",
    LastName : "Bhai",
    age : 20, 
    id : 28,
    coursName : "Web and app application",
    gendar : "male",
    email : null,
    result : undefined,
    getfullName : function () {
        return `${this.firstName} ${this.LastName} `
    }
    
}


var std2FullName = std2.getfullName();
console.log("std2FullName" ,std2FullName);


function Std(name, age, gendar, email){
    this.stdName = name;
    this.stdAge = age;
    this.gendar = gendar;
    this.email = email;
    this.getFullName = function(){
        return this.stdName;
    }
}

var std1 = new Std("Jaffar", 23, "male")
var std2 = new Std("Meer", 19, "female")


console.log(std1, std2);