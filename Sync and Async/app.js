// console.log("Hello SMIT");
// console.log("Hello SMIT");
// console.log("Hello SMIT");
// console.log("Hello SMIT");

// function foo(){
//     console.log("Hello WOrld");
// }

// setTimeout(foo, 5000)


// function loginHandler(){
//     console.log("login hello 3");
// }

// console.log("Hello SMIT");
// console.log("Hello SHerry");

// loginHandler();
// setTimeout(loginHandler, 5000);


// setTimeout(function (){
//     console.log("Hello 3 sec");
// } , 5000) // 5sec wait


// console.log("Hello Sherry");



// function start(){
//     console.log("Start");
    
// var interval = setInterval(function (){
//     console.log("Hello Shahmeer");
// }, 1000);
// }

// function stop(){
//     console.log("Stop");
//     clearInterval(interval);
// };


var minHeading = document.getElementById("minHeading");
var secHeading = document.getElementById("secHeading")
var msecHeading = document.getElementById("msecHeading")
var interval;


var msec = 0;
var sec = 0;
var min = 0;


function start(){
    msec++;
    msecHeading.innerHTML = msec;

    if( msec === 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0
    }else if( sec > 59){
        min++;
        minHeading.innerHTML = min;
        sec = 0;

    }
}



function startWatch(){
    interval = setInterval(start, 10)
}

function resetWatch(){
    clearInterval(interval);
    minHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    msecHeading.innerHTML = "00";
    min = 0;
    sec = 0;
    msec = 0;
}
function stopWatch(){
    clearInterval(interval);
}







