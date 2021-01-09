const quizData = [
    {
        question: 'Correct syntax for referring to an external script called "app.js"?',
        a: '<script name="app.js" />',
        b: '<script src="app.js" />',
        c: '<script href="app.js" />',
        d: '<javascript="app.js">',
        correct: 'b'
    }, {
        question: 'How do you write "Hello World" in an alert box?',
        a: 'alert("Hello World") ',
        b: 'msg("Hello World")',
        c: 'msgbox("Hello World")',
        d: 'alertbox("Hello World")',
        correct: 'a'
    }, {
        question: 'How do you create a function in JavaScript?',
        a: 'function myFunction()',
        b: 'function:myfunction()',
        c: 'myFunction = new Function()',
        d: 'func myfunction()',
        correct: 'a'
    }, {
        question: 'How do you call a function named "myFunction"?',
        a: 'call myFunction()',
        b: 'echo myFunction()',
        c: 'myFunction()',
        d: 'start myFunctiomn()',
        correct: 'c'
    },  {
        question: 'How can you add a comment in a JavaScript?',
        a: '* This is a comment',
        b: ' // This is a comment',
        c: '... This is a comment',
        d: '^This is a comment',
        correct: 'b'
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const correct = document.getElementById('correct');
const wrongEL = document.getElementById('wrong');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');
let right = 0;
let wrong = 0;
let questionNumber = 0;

initQuiz();

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
     answerEl.checked = false;
    });
}

function initQuiz(){
        deselectAnswers();
    const currentQuizData = quizData[questionNumber];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a; 
    b_text.innerText = currentQuizData.b; 
    c_text.innerText = currentQuizData.c; 
    d_text.innerText = currentQuizData.d; 

}

function getSelected(){
    let answer = undefined
    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });

    return answer;
}
submitBtn.addEventListener('click', () => {
    if(questionNumber == quizData.length){
        location.reload();
        return
    };
    const answer = getSelected();
    if(answer){
        if(answer === quizData[questionNumber].correct){
            right++;
            correct.innerText = right;
        }else{
            wrong++;
            wrongEL.innerText = wrong;
        }
        questionNumber++;    
    }
    if(questionNumber < quizData.length){
        initQuiz();
    } else {
        deselectAnswers();
      questionEl.innerHTML = `<h2>You scored ${right}/${quizData.length}</h2>`;
      submitBtn.innerHTML = `Restart &nbsp;&nbsp; >>`
    }
  
   
})

/* -------     DARK MODE    --------*/

const quizHead = document.querySelector(".quizHeader");
const quizBody = document.querySelector(".quizbody");
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener('click',() =>{
    document.body.classList.toggle('night');
     [quizHead, quizBody, submitBtn].forEach((element) =>{
         element.classList.toggle('night');
     })
})