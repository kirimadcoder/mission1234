console.log("Connected");
//Nightmode
const icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src = "images/blacksun.png";
    } else {
        icon.src = "images/whitemoon.png";
    }
}


function changeImg (imgchanger){
    document.getElementById('slider').src = imgchanger;
    setTimeout (() => {
        document.getElementById('slider').src = "images/mr2.png";
    }, 8000);
}

const circleBackground1 = document.getElementById("skill1");
const circleBackground2 = document.getElementById("skill2");
const circleBackground3 = document.getElementById("skill3");
const circleBackground4 = document.getElementById("skill4");
const circleBackground5 = document.getElementById("skill5");
const circleBackground6 = document.getElementById("skill6");
const circleBackground7 = document.getElementById("skill7");
const circleBackground8 = document.getElementById("skill8");
const circleBackground9 = document.getElementById("skill9");

const progressCircular = document.getElementById("outercircle");
let color = ["conic-gradient(purple 40deg, #fff 0deg)","conic-gradient(purple 80deg, #fff 0deg)","conic-gradient(purple 120deg, #fff 0deg)",
"conic-gradient(purple 160deg, #fff 0deg)","conic-gradient(purple 200deg, #fff 0deg)","conic-gradient(purple 240deg, #fff 0deg)",
"conic-gradient(purple 280deg, #fff 0deg)","conic-gradient(purple 320deg, #fff 0deg)","conic-gradient(purple 360deg, #fff 0deg)"];

circleBackground1.addEventListener("mouseover", function() {
    progressCircular.style.background = color[0];
    setTimeout (() => {
        progressCircular.style.background = "white";
    }, 8000);
});
circleBackground2.addEventListener("mouseover", function() {
    progressCircular.style.background = color[1];
    setTimeout (() => {
        progressCircular.style.background = "white";
    }, 8000);
});
circleBackground3.addEventListener("mouseover", function() {
    progressCircular.style.background = color[2];
    setTimeout (() => {
        progressCircular.style.background = "white";
    }, 8000);
});
circleBackground4.addEventListener("mouseover", function() {
    progressCircular.style.background = color[3];
    setTimeout (() => {
        progressCircular.style.background = "white";
    }, 8000);
});
circleBackground5.addEventListener("mouseover", function() {
    progressCircular.style.background = color[4];
    setTimeout (() => {
        progressCircular.style.background = "white";
    }, 8000);
});
circleBackground6.addEventListener("mouseover", function() {
    progressCircular.style.background = color[5];
    setTimeout (() => {
        progressCircular.style.background = "white";
    }, 8000);
});
circleBackground7.addEventListener("mouseover", function() {
    progressCircular.style.background = color[6];
    setTimeout (() => {
        progressCircular.style.background = "white";
    }, 8000);
});
circleBackground8.addEventListener("mouseover", function() {
    progressCircular.style.background = color[7];
    setTimeout (() => {
        progressCircular.style.background = "white";
    }, 8000);
});
circleBackground9.addEventListener("mouseover", function() {
    progressCircular.style.background = color[8];
    setTimeout (() => {
        progressCircular.style.background = "white";
    }, 8000);
});

//Survey form here------------------------------------

const ratings = document.querySelectorAll('.rating');
const rContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectRating = 'Satisfied';

//Add Event Listerner-------console.log(e.target);

panel.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectRating = e.target.nextElementSibling.innerHTML;
        console.log(selectRating);
    }
})
function removeActive() {
    for(let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove('active');
    }
}

sendBtn.addEventListener('click', (e) => {
        panel.innerHTML = `
     <img style="height:50px;" src="images/heart.png">
    <h2> Thank you</h2>
    <br>
    <strong>Feedback: ${selectRating} </strong>
    <strong>I appreciate your feedback</strong>`;
    if(selectRating == "Disappointed") {
        panel.innerHTML = `
        <img style="height: 50px;" src="images/broken-heart.png"></img>
        <h2>I will thank you later</h2>
        <br>
        <strong>Feedback: ${selectRating}</strong>
        <strong>I will work harder!</strong>`;
    }
})



/*const skillOne = document.getElementById("skillOne");
let arrayOfBackground = ['white', '40deg purple, 0deg white', '80deg purple, 0deg white'];
let currentColor = 0;

function skill1() {
    const circleBackground = document.getElementById("outercircle");
    circleBackground.style.background = "purple";
}*/

//Progress bar "conic-gradient(purple 40deg, #fff 0deg)";
//let progressCircular = document.getElementsByClassName("background1");

/*function skill1() {
    let progress = setInterval(() => {
        start ++;
        console.log(start);
        if (start == skillOne){
            clearInterval(progress);
        }
    
}
)}
function skillTasi() {
    document.getElementById("value1").remove;
}*/


/*function skillTasi(){
    let progress = setInterval(() => {
        skillOne --;
        console.log(skillOne);
        if (skillOne === 0) {
            clearInterval(progress);
            console.log(skill1);
        } 
}
)}*/
/*function skill2() {
    let progress = setInterval(() => {
        start ++;
        console.log(start);
        if (start == skillOne + 40){
            clearInterval(progress);
        }
    
}
)}*/
/*let progressCircular = document.querySelector(".outercircle");


let start = 0;

btn.addEventListener("click", bar )
    function bar(){
    let progress = setInterval(() => {
    start++;
    console.log(start);
    if (start == skillset.percentage){
        clearInterval(progress);
    }
    })
}*/
