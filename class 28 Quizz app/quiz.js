// console.log("Hello Smit");
var question =[
    {
        id:1,
        question: "HTML stand for",
        options :{
            a: "Hyper text markup Language",
            b: "Hyper text programing Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",
        },
        answer: "Hyper text markup Language"
    },
    {
        id: 2,
        question: "Which type of JavaScript Languages is",
        options: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    },

    {
        id: 3,
        question: "The 'function' and  'var' are known as:",
        options: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    },
    {
        id: 4,
        question: "who is the present president of pakistan",
        options: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Arif Alvi"
    }
    ,
    {
        id: 5,
        question: "How many prayers in a day:",
        options: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        id: 6,
        question: "How many total surah in quran",
        options: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        id: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        options: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
]
// set user name and userEmail
var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
userName.innerHTML = localStorage.getItem("name");
userEmail.innerHTML = localStorage.getItem("email");

var htmlQues = document.getElementById("htmlQues");
var htmlOptions = document.getElementById("htmlOptions");
var indexNum = 0;


// Counter
var currentCount = document.getElementById("currentCount");
var totalCount = document.getElementById("totalCount");
totalCount.innerHTML = question.length;



function StartQuiz(){
    // console.log("startQuiz", question[indexNum].options);
    htmlQues.innerHTML = question[indexNum].question;


    htmlOptions.innerHTML = "";
    for( var key in question[indexNum].options){
        // console.log("key", key, question[indexNum].options[key]);
        var option = question[indexNum].options[key];
        htmlOptions.innerHTML += `<li> ${option} </li>`
    }
    // {
    //     a: "6",
    //     b: "5",
    //     c: "3",
    //     d: "none"
    // }
}
function nextQues(){
    if(indexNum < question.length ){
        indexNum++;
        currentCount.innerHTML++;
        console.log("next Question" , indexNum);
        StartQuiz()
    }
}


