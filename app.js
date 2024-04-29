// console.log("Hello SMIT")

// //Data Types 
// // String, Number, Boolean, Null and Undefined

// // Strings
// var username = "Shehriyar ALam";
// console.log(username)


//  var username = "'Jaffar aman'"
//  console.log(username)

// Number 
// var num1 = 50;
// var num2 = 55;
// var sum  = num1 + num2;
// console.log(sum)

// var num1 = 50;
// var num2 = 55;
// var sum  = num1 - num2;
// console.log(sum)

// var num1 = 50;
// var num2 = 55;
// var sum  = num1 * num2;
// console.log(sum)

// var num1 = 50;
// var num2 = 55;
// var sum  = num1 / num2;
// console.log(sum)


// var num1 = 50;
// var num2 = 55;
// var sum  = num1 % num2;
// console.log(sum)


// // Cooncatenation
// var FirstName = "Shehriyar"
// var LastName = " Alam"
// var addition = FirstName + LastName;
// console.log(addition)

/* Strings main Add nh Concate hota hai  */



// var FirstName = "Shehriyar";
// var LastName = "Alam"
// var FullName = FirstName + "  " + LastName;
// console.log(FullName);




// DMAS
// BODMAS
// var num1 = 8;
// var num2 = 9;
// var ans = num1 + num2 * num2;
// console.log(ans)

// var num1 = 8;
// var num2 = 9;
// var ans = (num1 + num2) * num2;
// console.log(ans)

// var user = " ";
// var UserName = ""; CamelCase >>>>Best Practice
/* var $user = ;
var user_name = ""; */

// var >>> use 
// var can be re-declared and update . A global scope Variable 

// var username = "Sehriyar"
// // console.log(username)
// username = "Alam"
// // console.log(username)
// username = "Shehriyar Alam"
// console.log(username)



// // Let >>> Use 
// // let cannot be re-declared but can be  update . A block scope Variable 
// let UserName = "H.Shehriyar"
// // console.log(UserName)
// UserName = "Alam"
// // console.log(UserName)
// let UserName = "Alam"
// console.log(UserName)



// // const >>> use 
// // Const cannot be Re-declared and Update 
// const StdName = "Shahmeer";
// // console.log(StdName);
// // StdName = "alam"
// // console.log(StdName);
// const StdName = "sherry";
// console.log(StdName)

// Data Types 
// String >>> Group of Characters
// Number >>>> 23 , 8, 90 
// Boolean >>>> True , False
// Null >>>> Null
// Undefined >> jojfp/qhok



// var age = 23; >>> number
// var age = "23" >>>> String


// Post Increment >>>> PEhle print and add
// var num = 10;
// console.log(num++)
// console.log(num)

// Pre Increment >>> Pehle add and print
// var num = 20;
// console.log(++num);
  

//Post Decrement | Pre Decrement >>> as Increment ;
// Post
// var num = 10;
// console.log(num--)
// console.log(num)

// Pre 
// var num = 25;
// console.log(num--)
// console.log(num)



// var num1 = 10; //10    12       10       11     10        11 
// var result = num1++ + ++num1 + num1++ + num1  + num1++ + num1 ;
// console.log(result);


// var num = 5;// 5      7       7      6      6       8        8      7
// var result = num++ + ++num + num + --num + num++ + ++num + num-- + num;
// console.log(result);

// Condition 
// if => true
// else => false
// if(condition){
//     Block OF code
// }else{
//     False Value
// }

// var stdGender = prompt("Female")
// if(stdGender === "Female"){
//     console.log("stdAllow")
// }else{
//     console.log("Chla Ja Larke")
// }


// var userAge = +prompt("Enter your age")
// if(userAge <= 18){
//     console.log("Welcome")
// }else{
//     console.log("Ruko Zara Sabr Kro")
// }


// Logical Operators
// End Gate >> && >> Both value is true 
// OR Gate >> || >> One value is true

// OR Gate
// var UserAge = +prompt("Enter Your Correct Age ")
// if (UserAge >= 18 || UserAge <= 40 ){
//     console.log("Eligible")
// }else{
//     console.log("You are not Eligible")
// }
 


// End Gate
// var UserAge = +prompt("Enter Your Correct Age ")
// if (UserAge >= 18 && UserAge <= 40 ){
//     console.log("Eligible")
// }else{
//     console.log("You are not Eligible")
// }


// var UserAge = prompt("Enter Your Age ")
// var UserGendar = prompt("Enter Your Gendar")

// if ( (UserAge >=  18 && UserAge <= 40) &&  (UserGendar == "male" || UserGendar == "female")){
//     console.log("Allow")
// }else{
//     console.log("Eligibliy Criteria doesn't match")
// }


// var stdAge = prompt("enter age");
// var stdGender = prompt("enter gender");
// if (
//   stdAge >= 18 && stdAge <= 40
//     // true  && false
//     &&   stdGender == "male" ||  stdGender == "female"
// ) {
//   console.log("allow");
// } else {
//   console.log("not allow");
// }



// != else chalega
// var userGendar = prompt("enter Your Gendar")

// if (userGendar !==  "Custome"){
//     console.log("Allow")
// }else {
//     console.log("Chla ja")
// }

// var userGendar = prompt("Enter Your Age ")

// if (userGendar == "male"){
//     console.log("Boys Allowed")
// }else if(userGendar == "Female"){
//     console.log("Girls Allowed")
// }else if(userGendar == "tiktoker") {
//     console.log("Ja Dance Kr")
// }else(
//     console.log("Not Allowed")
// )

// var actualScore = 10;
// var userNum = prompt("enter your number")
// if(actualScore == userNum){
//     console.log("win")
// }else{
//     console.log("Lost")
// }

// var num1 = +prompt("Enter num1")
// var num2 = +prompt("Enter number")
// var opt = prompt("Enter Opt")
// console.log("opt", opt)
// if(opt == "+"){
//     console.log("add", num1+num2)
// }else if(opt == "-"){
//     console.log("sub", num1-num2)
// }else if(opt == "*"){
//     console.log("multipl", num1*num2)
// }else if(opt == "/"){
//     console.log("div", num1/num2)
// }else if(opt == "%"){
//     console.log("mod", num1%num2)
// }else{
//     console.log("error invalid opt")
// }



// var Email = "shehriyar";
// var Pass = "SMIT";

// var userEmail = prompt("enter your Email");
// var userPass = prompt("Enter your Pass")

// if(userEmail === Email  && userPass === Pass ){
//     console.log("Login")
// }else{
//     console.log("Invalid PAssword")
// }

// Nested if

// var Email = "shehriyar";
// var Pass = "SMIT";

// var userEmail = prompt("enter your Email");
// var userPass = prompt("Enter your Pass")

// if (userEmail == Email){
//     if( userPass === Pass){
//         console.log("Login")
//     }else{
//         console.log("Invalid Password")
//     }
// }else{
//     console.log("email not found")
// }


//Practice 
//  var UserInput = prompt("Enter your number")
//  if(UserInput % 3 === 0){
//     console.log("allow")
//  }else{
//     console.log("Not Allow")
//  }

// var UsrMarks = prompt("Enter Your Marks")

// if( UsrMarks >= 80 && UsrMarks <=100 ){
//     console.log("A-one")
// }else if(UsrMarks >= 70 && UsrMarks <= 79){
//     console.log("A")
// }else if(UsrMarks >= 60 && UsrMarks <= 69){
//     console.log("B")
// }else if(UsrMarks >= 50 && UsrMarks <= 59){
//     console.log("C")
// }else if(UsrMarks >= 0 && UsrMarks <= 49){
//     console.log("Fail")
// }else{
//     console.log("Please Enter Correct Marks")
// }


// Arrray >>> Data Types
// Array >>> Collection OF items 
// Array >>> Information Store Karane kA ek Linear Tarika hai;
// var fruit1 = "apple";
// var fruit2 = "Mango";
// var fruit3 = "Banana";

// var fruits = ["apple", "Mango", "Banana", "Orange"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[4]);

// array assign ke bd or bh add kr sakte hain
// var StdName = ["Jaffar"];

// StdName[1] = "Aman";
// StdName[2] = "Alam";
// StdName[3] = "farhan";
// StdName[4] = "shayan";
// StdName[5] = "arshad";
// StdName[6] = "talat";
// StdName[7] = "muneeb";
// StdName[8] = "Alam";

// console.log(StdName);

// var fruitArr = ["apple", "Bnana", "Mango", "Orange", "Tamato"];
// var numArr = [10,  20, 30, "number", true, null, undefined,];

// console.log(numArr)

// var numArr = [10, 20, 30];

// numArr[2] = "100";
// console.log(numArr);

// var fruitArr = ["apple", "mango", "Banana", "Malta",]
// console.log(fruitArr);


// Pop,Push >>> Remove & add Last index

/// for add >>>push
// For Remove >>>pop


// fruitArr.push("orange");
// console.log(fruitArr);

// fruitArr.pop();
// fruitArr.pop();
// fruitArr.pop();
// fruitArr.push("Orange");


// console.log(fruitArr);  

// var fruitArr = ["apple", "mango", "Banana", "Malta",]
// console.log(fruitArr);


// // fruitArr.push("Banana")

// fruitArr.pop();
// console.log(fruitArr);



//Shift,Unshift >>>> First index add and remove

// shift >>>> remove
// Unshift >>>  add

// var fruitArr = ["apple", "mango", "Banana", "Malta",]
// console.log(fruitArr);

// fruitArr.shift();
// console.log(fruitArr)

// fruitArr.unshift("apple")
// console.log(fruitArr)

// pop, push >>> Last
// Shift , Unshift >>> First

// // lenght >>       1        2         3        4
// var fruitArr = ["apple", "mango", "Banana", "Malta",]
// //  index        0         1        2         3
// console.log(fruitArr);

// var slicefruitArr = fruitArr.slice(2)
// console.log(slicefruitArr);

// var fruitArr = ["apple", "mango", "Banana", "Malta",];
// //splice 
// console.log(fruitArr)
// fruitArr.splice(2,0, "pakistan", "Karachi")
// console.log(fruitArr);


// var fruit = "mango";
// var fruit = "Apple";
// var fruit = "Banana";
// var fruit = "Orange";


// var fruit = ["apple", "Orange", "mango", "Banana", "Malta"]
// console.log(fruit[1]);
// console.log(fruit[0]);
// console.log(fruit[2]);
// console.log(fruit[4]);


// prop/method =>


// var arr = [];
// arr[0] = "karachi";
// arr[1] = "Lahore";
// arr[3] = "Multan";
// arr[4] = "Rawalpindi";
// arr[5] = "Quetta";
// arr[6] = "Faislabad";
// console.log(arr);
// console.log(arr.pop());
// var cities = [];
// cities[2] = "islamabad";
// cities[3] = "Multan";
// cities.push("delhi", "Islamabad", "Karachi")
// cities.pop()
// cities.pop()
// cities.pop()


// console.log(cities)


// var fruitArr = ["Apple", "Mango", "Banana", "Orange"]
// console.log(fruitArr)

// console.log(fruitArr[0])
// console.log(fruitArr[1])
// console.log(fruitArr[2])
// console.log(fruitArr[3])



// // Array Ki Value add ho rhi hai
// var stdName = ["Jaffar"]

// stdName[1] = "Aman"
// stdName[2] = "Aman"
// console.log(stdName);



// // Array main changing bh ho sakti hai, data type bh change ho sakti hai


// var numArr = [10, 20, 30, "Mango", "Banana", "Orange"]
// console.log(numArr)
// numArr[2] = "100";
// console.log(numArr);



// var fruits = ["apple", "Mango", "Banana", "Orange",]
// console.log(fruits.length)


// var friends = ["Talat", "Muneeb", "Ahmad", "Arshad"];
// console.log(friends);

// friends.pop()
// friends.pop()
// console.log(friends);


// var CoaFriends = ["Ahmad", "Arshad", "Umar"]
// console.log(CoaFriends);
// CoaFriends.push("Mudassir")
// console.log(CoaFriends)
// CoaFriends.push("Asad");
// console.log(CoaFriends)




// var PakPlayers = ["Babar", "Amir", "Imad", "Rizwan",]
// console.log(PakPlayers);
// PakPlayers.unshift("Saim");
// console.log(PakPlayers);
// PakPlayers.unshift("Usman Khan")
// console.log(PakPlayers);




// var IndPlayers = ["Kohli", "Rohit", "Shubman", "Hardhik"]
// console.log(IndPlayers);
// IndPlayers.shift()
// console.log(IndPlayers);
// IndPlayers.shift()
// console.log(IndPlayers);


// var KarachiKings = ["Shan", "Pollard", "Irfan", "Tim", "Mathew"]
// console.log(KarachiKings);
// var KarachiToLahoere = KarachiKings.slice(0)
// console.log(KarachiToLahoere)


// var Peshawar = ["Babar", "saim", "haris", "Jamal"]
// console.log(Peshawar);
// Peshawar.splice("Walton");
// console.log(Peshawar);"


//Loop

//For Loop
/* for (initialization, condition, increment/Decrement){
    Block OF Code
}*/



// for (var i = 1; i <= 9; i++ ){
//     console.log("Hello World", i)
// }


// for (var i = 1; i <= 10; i++){
// document.write(i + ": " +"<span>Hello World</span>" + "<br />" )
// };


// for (var i = 1; i <= 10; i++){
//     document.write("2 x " + i + "=" + i * 2 + "<br />")
// }
// for (var i = 1; i <= 10; i++){
//     document.write(" 3 x " + i + "=" + i * 3 + "<br />")
// }



// document.write("2 x 1 = 2" + "<br />")
// document.write("2 x 2 = 4" + "<br />")
// document.write("2 x 3 = 6" + "<br />")
// document.write("2 x 4 = 8" + "<br />")
// document.write("2 x 5 = 10" + "<br />")

// For Loop

// document.write(1 + "<br />");

// //round
// for (var i = 1; i<=10; i++){
//     document.write(i)
// };


// var tableNumber = +prompt("enter table number")
// var tablelenght = +prompt("Enter table lenght")
// console.log(tableNumber, "table Number")

// for (var i = 1; i <= tablelenght; i++){
//     document.write(tableNumber + " x" + i + "=" + tableNumber * i + "<br />")
// }

// var tableNumber = +prompt("enter table number:")
// var tableLen = +prompt("enter table length:")
// console.log(tableNumber, "tableNumber")

// for (var i = 1; i <= tableLen; i++) {
//     document.write(tableNumber + " x" + i + "=" + tableNumber * i + "<br />")
// }


// var tableNumber = +prompt("Enter Number")
// var tablelenght = +prompt("Enter Lenght")
// console.log(tableNumber, "table number")

// for (var i = 1; i<=tablelenght; i++){
//     document.write(tableNumber + " x " + i + "=" + tableNumber * i + "<br />")
// }

// round 
// for (var i = 1; i<= 100; i++){
//     console.log("Hello", i)
// }

// var i = 10;
// for(i; i >= 1; i--){
//     console.log(i)
// }






// for (var i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(i, "odd")
//     }
// }


// for(var i = 1; i <= 50; i++){
//     if(i % 2 !== 0){
//         console.log(i, "even")
//     }
// }


// var arr = ["karachi", "Multan", "lahore", "delhi"];
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);


// for ( i = 0; i<= arr.length; i++){
//     console.log(arr[i])
// };





// for (var i =1; i<=200; i++){
//     if (i == 98){
//         console.log(i, "Hello World")
//         // break
//         continue
//     }
//     console.log(i)
// }
 

// var userCity = prompt("Enter your city").toLowerCase()
// var cityCollection = ["karachi", "lahore", "multan"]
// var isMatch = false;


// for (var i = 0; i<=cityCollection.length; i++){
//     if(cityCollection[i] === userCity) {
//         console.log("exist")
//         isMatch = true;
    
//     }
// }
// console.log("isMatch", isMatch)

// if(isMatch === false){
//     console.log("not Exist")
// }

// var userCity = prompt("Enter Your City")
// var cityCollection = ["karachi", "lahore", "Islamabad", "Kashmir"]



// console.log("hello world")

//Events
// function greet (userName){
//     console.log(userName,);
//     alert("Hello Class " + userName)
// }

// greet();
// console.log(document);



    // function saveUsername(){
    //     //Read----Get Value
    //     var userName = document.getElementById("userName")
    //     console.log("userName", userName.value)

    //     // document.write(userName.value);
    //     // write ---Set Value
    //     // var userName = document.getElementById("userName");
    //     // console.log("username", userName.value);

    //     var userName = document.getElementById("userName")
    //     userName.value = "";

    // }


// Calculator 
// var addValue(num){
//     var inputField = document.getElementById("inputField");
//     // console.log(inputField, "inputField")
//     inputField.value += 
// }


// let strA = "Hi";
// let strB = strA;

// strB = "bye";
// console.log();

// function ChangeImg(check, elem){
//     console.log("changeimg", check, elem)

// if(check == 'in')
// {
//     // console.log("Virat");
//     elem.src="./R.jpeg"
    

// }else{
//     // console.log("Babar");
//     elem.src = "./Babar-Azam1.jpg"
// }


// }


// function changeImg(check, elem) {
//     console.log("changeImg", check, elem)

//     if (check == "over") {
//         elem.src = "./R.jpeg"
//     } else {
//         elem.src = "./Babar-Azam1.jpg"
//     }
// }

// function foo(){
//     console.log("foo")
// }

// function inputfocus(shahmeer){
//     console.log("inputFocus()", shahmeer)
//     shahmeer.style.color = "red"
//     shahmeer.style.backgroundColor = "blue"
// }

// function inputblur(sherry){
//     console.log("inputblur", sherry);
//     sherry.style.color ="green";
//     sherry.style.backgroundColor ="green";
// }

// function getValue(){
//     var shahmeer = document.getElementById("para");
//     console.log("getValue", shahmeer.innerHTML)
// }
//  var name = "Shehriyar"
// function setValue(){
//     var shahmeer = document.getElementById('para');
//     console.log("setValue", );
//     shahmeer.innerHTML += "Hello World";
// }

// var paraLong = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloremque exercitationem sequi ullam quibusdam minima incidunt velit laudantium a molestiae";
// var paraShort = "Lorem ipsum dolor sit amet consectetur adipisicing elit."

// function seeMore(anchorElem){
//     var para = document.getElementById('para')
//     if(anchorElem.innerHTML === "See More"){
//         anchorElem.innerHTML = "See Less"
//         para.innerHTML = paraLong;
//         }
//         else{
//             anchorElem.innerHTML = "See More"
//             para.innerHTML = paraShort;
//         }
// }

// function Show(btnElem){
//     console.log("btnElem", btnElem.innerHTML);
//     var password = document.getElementById('Password')
//     console.log(password.value);

//     if(btnElem.innerHTML == "SHOW"){
//         btnElem.innerHTML = "Hide Password"
//         password.type = "text"
//     }else{
//         btnElem.innerHTML = "SHOW";
//         password.type = "password"
//     }
// }

// function showPass(btnElem) {
//     console.log("btnElem", btnElem.innerHTML)
//     var password = document.getElementById("password")

//     if (btnElem.innerHTML == "SHOW") {
//         btnElem.innerHTML = "HIDE"
//         password.type = "text"
//     } else {
//         btnElem.innerHTML = "SHOW"
//         password.type = "password"
//     }
// }

function toggleImg(){
    var image = document.getElementById('image');
    console.log("image", image.className);
    if(image.className == "show"){
        image.className = "hidden"
    }else{
        image.className = "show"
    }
}


var image = document.getElementById('image');
console.log(image.className);
image.className += "border";























































    


































