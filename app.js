questionsArray = [{
},
{

    question: "Q1. Who is the inventor of Facebook?",
    answer: "Mark Zuckerburg",
    options: ["Mark Zuckerburg", "Steve Jobs", "Bill Gates", "Elon Musk"]

},
{

    question: "Q2. Microsoft founder is?",
    answer: "Bill Gates",
    options: ["Bill Gates", "Mark Zuckerburg", "David Backhem", "Carlos Slim"]


},
{

    question: "Q3. What is the abbrevation of Google?",
    answer: "Global Organization of Oriented Group Language of Earth",
    options: ["Not given", "All Of them", "Global Organization Oriented Group Language Earth", "Global Organization of Oriented Group Language of Earth"]


},
{

    question: "Q4. If a computer has more than one processor then it is known as?",
    answer: "Multiprocessor",
    options: ["Uni-process", "Multiprocessor", "Multi-threaded", "Multi programming"]


},
{


    question: "Q5. WWW stands for?",
    answer: "World Wide Web",
    options: ["World Wide Web", "Whole World Web", "Webd Wide World", "Nonve of them"]


},
{} ]


function quizStarted(){
sweetAlertSuccessMsg("Your Quiz Has Been Started")
}


// Timer
var min = 0
var sec = 0
var ms = 0
var getMin = document.getElementById("min")
var getSec = document.getElementById("sec")
var interval

function millisecond() {
    ms++
    if (ms >= 100) {
        sec++
        getSec.innerHTML = sec
        ms = 0
    }

    if (sec >= 59) {
        min++
        getMin.innerHTML = min
        sec = 0
    }

    // Result Page
    if(min==10){
    location.replace("result.html") 
    }
}
function start() {
    interval = setInterval(millisecond, 10);
}
start()





// Add Active Class
function addClassActive(e){
removeClassActive()
e.classList.add("active")
}
// Remove Active Class
function removeClassActive(){
var active= document.getElementsByClassName("active")
for(var i=0; i<active.length; i++){
active[i].classList.remove("active") 
}
}


// LogIn Avatar
function login(){
sweetAlertSuccessMsg("You are LogIn")
}



// Next Question
var count=0
// Question.innerHTML=questionsArray[1].question
function nextQuestion(){
count++ 

// Questions
var Question= document.getElementById("question");
Question.innerHTML=questionsArray[count].question;

// Answers
var Options= document.getElementsByClassName("p-2")
var orderList=1
for(var i=0; i<Options.length; i++){
Options[i].innerHTML=orderList++ +". "+questionsArray[count].options[i]
}

// if(questionsArray[5]==null){
// alert("SUBMIT")
// }

var active= document.getElementsByClassName("active")
// if(active.innerHTML==questionsArray[count].answer){
console(active)
// }
removeClassActive()
}









/* Main Html*/
function inp(){
var input= document.getElementById("input")
if(input.value==""){
Swal.fire("Please Enter Your Name <br> To Start Quiz")
}
else{
location.replace("main.html")   
// Local Storage
localStorage.setItem("ls", input.value);
}
}
// Local Storage Getting Data
document.getElementById("name").innerHTML ="Hello! "+ localStorage.getItem("ls");

// For Removing Local Storage Data
// localStorage.removeItem(ls);




/* Result Html*/
function score(){
    var score= document.getElementById("score")
    score.innerHTML=8
    if(score>=4 && score<=10){
    sweetAlertSuccessMsg("Congratulations! You Are Pass")
    }
    else{
    sweetAlertSuccessMsg("Sorry! You are Fail")
    }
}
score()





// sweetAlertSuccessMsg("Quiz Submitted Successfully")
// Sweet Alert Library
function sweetAlertSuccessMsg(msg){
    const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  Toast.fire({
    icon: 'success',
    title: msg
  })  
}