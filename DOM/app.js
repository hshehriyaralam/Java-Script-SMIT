// function foo(){
//     console.log("Hello WOrld");
// }


// function add(){
//     var num1 =  +prompt("enter your num1")
//     var num2 = +prompt("Enter Your num2")
//     console.log("addition", num1 + num2);
// };

// function add(num1, num2 = 0){
//     console.log("addition", num1, num2);
//     console.log("addition", num1 + num2);
// }



// function addFunc (){
//     return "Jaffar AMan"
// }

// console.log(addFunc());


// var result = addFunc()
// console.log(result);

// var userName = "jaffar Aman"; // Global Scope

// function foo(){
//     var userName = "Meer"; // Local Scope
//     console.log("1 UserName ", userName);
// }
// foo();
// console.log("2 UserName ", userName);



// function foo(ele, num1){
//     console.log("Foo 1", ele, num1); 
//     ele.style.backgroundColor = "blue";
//     ele.style.color = "white";
//     ele.innerHTML = "Click Me!"
//     ele.style.border = "0"

// }


// var img = document.getElementById("img");
// function changeImg(eventImage){
//     if(eventImage == "over"){
//         console.log("over");
//         img.src ="pakistans-mohammad-amir-in-bowling-action-JAPXGX.jpg"
//     }else{
//         img.src = "R.jpeg"
//         console.log("Out");
//     }
// }


function getValue(){
    var inputField = document.getElementById("inputField")
    console.log("inputfield", inputField.value )
}


function setValue(){
    var inputField = document.getElementById("inputField")
    inputField.value = prompt("ENter");
    console.log(prompt.value)
    
}



