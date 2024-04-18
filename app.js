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