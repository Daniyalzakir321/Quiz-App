// Name : M.Daniyal Zakir
// Roll No: WM5912
// Email: daniyalzakir03@gmail.com
// Assignment-11: QUIZ WEB APP

questionsArray = [
{

    question: "Q1. Who is the inventor of Facebook?",
    answer: "1. Mark Zuckerburg",
    options: ["1. Mark Zuckerburg", "2. Steve Jobs", "3. Bill Gates", "4. Elon Musk"]

},
{

    question: "Q2. Microsoft founder is?",
    answer: "1. Bill Gates",
    options: ["1. Bill Gates", "2. Mark Zuckerburg", "3. David Backhem", "4. Carlos Slim"]

},
{

    question: "Q3. What is the abbrevation of Google?",
    answer: "4. Global Organization of Oriented Group Language of Earth",
    options: ["1. Not given", "2. All Of them", "3. Global Organization Oriented Group Language Earth", "4. Global Organization of Oriented Group Language of Earth"]

},
{

    question: "Q4. If a computer has more than one processor then it is known as?",
    answer: "2. Multiprocessor",
    options: ["1. Uni-process", "2. Multiprocessor", "3. Multi-threaded", "4. Multi programming"]

},
{

    question: "Q5. WWW stands for?",
    answer: "1. World Wide Web",
    options: ["1. World Wide Web", "2. Whole World Web", "3. Web Wide World", "4. None of them"]

} ]

/*=============== Index Html ============*/
function inp(){
var input= document.getElementById("input")
input.style.textTransform = "Capitalize";
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

    
    

/*================ Main Html ==============*/
// Quiz Started Message & Timer Start
function quizStarted(){
sweetAlertSuccessMsg("Your Quiz Has Been Started")
start()
}

// Timer
var min=0, sec=0, ms=0, interval=0;
var getMin = document.getElementById("min")
var getSec = document.getElementById("sec")

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
// Result Page If Time Over
if(min==10){
sweetAlertTimer("Your Time Is Over!<br> Submitting Quiz") }
}
}
function start() {
interval = setInterval(millisecond, 10);
}




// Add Active Class
function addClassActive(e){
removeClassActive()
e.classList.add("active")
}
// Remove Active Class
function removeClassActive(){
var active= document.getElementsByClassName("active")
for(var i=0; i<active.length; i++){
active[i].classList.remove("active") }
}



// LogIn Avatar
function login(){
sweetAlertSuccessMsg("You are LogIn as <br>"+localStorage.getItem("ls"))
}
// LogOut
function logOut(){
location.replace("index.html")
// For Removing Local Storage Data
localStorage.removeItem(ls);
localStorage.removeItem(result);
}





// Next Question
var count= 0
function nextQuestionCount(){
// Active Class is Selected or Not
var active= document.getElementsByClassName("active")
if (!$(active).hasClass("active")){
Swal.fire("Please Select An Option")
}
else{
count++ 
// nextQuestion
nextQuestion(count)
// Scores
scores(count)
// Remove Class Active
removeClassActive()
}
}

function nextQuestion(e){
// Submit Quiz
if([e]==5){
sweetAlertTimer("Submitting Quiz") 
}
else{
// Questions
var Question= document.getElementById("question")
Question.innerHTML=questionsArray[e].question;
// Answers
var Options= document.getElementsByClassName("p-2")
for(var i=0; i<Options.length; i++){
Options[i].innerHTML=questionsArray[e].options[i] 
}
// removeClassActive()
// Question Count 5/5
var questionCount= document.getElementById("questionCount")
questionCount.innerHTML=e+1
}
}







/*================ Result Html ==============*/
var sc= 0
function scores(e){
  
var active= document.getElementsByClassName("active")
if(active[0].innerHTML==questionsArray[e].answer){
sc+=2

console.log(e)
console.log(sc)
console.log( active[0].innerHTML)
console.log(questionsArray[e].answer)
localStorage.setItem("result", sc);
}
// else{
console.log("**** ")
// }
console.log("C: "+ sc)
console.log("A: "+ active[0].innerHTML)
console.log("B: "+questionsArray[e].answer)
console.log("**** ")
}


// Result With Local Strorage  
function result(){
var score= document.getElementById("score")
result=localStorage.getItem("result")
score.innerHTML=result

if(result>=4){
sweetAlertSuccessMsg("Congratulations! "+localStorage.getItem("ls")+"<br> You Are Pass")
}
else{
sweetAlertSuccessMsg("Sorry! "+localStorage.getItem("ls")+"<br> You Are Fail")
}
}






/*================ Sweet Alert Library ==============*/
// Sweet Alert Library Message
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

// Sweet Alert Library Timer
function sweetAlertTimer(timer){
let timerInterval
Swal.fire({
  title: timer,
  html: ' Wait a moment... ',
  timer: 3000,
  timerProgressBar: true,
  onBeforeOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
            b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  onClose: () => {
    //   Timer Close 
    location.replace("result.html")

    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}