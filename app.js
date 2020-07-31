questionsArray = [
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


} ]


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


var count=0
function nextQuestionCount(){
count++ 
nextQuestion(count)
score(count)

}


function nextQuestion(e){
// Submit Quiz
if([e]==5){
sweetAlertSuccessMsg("Submitting Quiz")
location.replace("result.html") 
}

// Questions
var Question= document.getElementById("question");
Question.innerHTML=questionsArray[e].question;

// Answers
var Options= document.getElementsByClassName("p-2")
for(var i=0; i<Options.length; i++){
Options[i].innerHTML=[i+1] +". "+questionsArray[e].options[i]
}

// Question 5/5
var questionCount= document.getElementById("questionCount");
questionCount.innerHTML=e+1

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
var score= 0
// var score= document.getElementById("score")
function score(e){
    var sco= document.getElementById("score")
   
    // var active= document.getElementsByClassName("active")
    if(active[0].innerHTML==questionsArray[e].answer){
        sco.innerHTML= "aa"
        // score +=2
    // localStorage.setItem("sc", score.value);
    // break

    // if(score>=4 && score<=10){
    // sweetAlertSuccessMsg("Congratulations! You Are Pass")
    // }
    // else{
    // sweetAlertSuccessMsg("Sorry! You are Fail")
    // }
 }
}
// document.getElementById("score").innerHTML =localStorage.getItem("sc");




function logOut(){
    location.replace("index.html") 
}



 
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