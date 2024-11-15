

const Question1 = {
    question: "Question 1: What button do you press to group or un-group a stop?",
    answers :[   
       "A) Help Menu Button",
        "B) Back Button",
        "C) Driver Support Button",
        "D) Edit Stop Button",
        "E) All of the above",
    ],
    correctAnswer : "D) Edit Stop Button",

}

const Question2 = {
    question: "Question 2: Are you allowed to remove Stops from multi-location deliveries?",
    answers :[   
       "A) No",

        "B) Yes",
    ],
    correctAnswer : "B) Yes"
}
   
const Question3 = {
    question: " Question 3: What does a greyed out area in a location mean?",
    answers :[   
       "A) A business is closed",

        "B) That I'm running late",

        "C) The customer says they do not have time to accept my delivery",

        "D) The location has different requirements from another stop", 

        "E) All of the above",

    ],
    correctAnswer: "D) The location has different requirements from another stop" 
   
} 
const Question4 = {
    question: " Question 4: (True or False) if your device loses connectivity, you can still modify your stops",
    answers :[   
       "A) True",

        "B) False",

    ],
    correctAnswer: "B) False"
   
} 
const Question5 = {
    question: " Question 5: Grouping requests are instant?",
    answers :[   
       "A) No",

        "B) Yes",

    ],
    correctAnswer: "A) No"
   
} 
const Question6 = {
    question: " Question 6: What are the restrictions to grouping stops?",
    answers :[   
       "A) Time Constraints",

        "B) Distance over 100 meters",

        "C) Stops with special requirements",

        "D) All of the above", 

    ],
    correctAnswer: "D) All of the above"
   
} 

//console.log(QuestionOne)


let WelCont = document.getElementById('welcome')
let QuizCont = document.getElementById('quiz')
let questCont = document.getElementById('question')
let answerCont = document.getElementById(`answers`)
let correct;

let start = document.getElementById('start')
start.addEventListener('click',function(){
    QuizCont.style.display = 'grid'
    WelCont.style.display = 'none'
   
})
let message = document.createElement('div')
message.classList.add('message')
message.style.background = '#082f4d'
message.style.position = 'absolute'
message.style.placeSelf = 'center'
message.style.color = 'white'
message.style.width = '60%'
message.style.height = "100%"

message.style.fontSize = "40px"
message.style.textAlign = "center"
message.style.placeContent = 'center'
message.style.paddingTop = '30px'
message.style.paddingBottom = '30px'
message.style.borderRadius = '10px'
message.style.display = 'none'



function display(Obj){

let score = 0 ;
let selAns = "";
let newAns = '';
questCont.innerHTML = `${Obj.question}`;
Obj.answers.forEach((answer) => {
    correct = Obj.answer
   let btn = document.createElement('button')
   btn.classList.add('Btn')
   btn.textContent = `${answer}`
   answerCont.append(btn)
   btn.style.border = '1px solid black'
   btn.style.textAlign = 'left'
   btn.style.padding = '10px'
   btn.style.width = '100%'
   btn.width = 'fit-content'
   btn.style.borderRadius = '10px'
   btn.style.placeSelf = 'center'
   btn.addEventListener('click',()=>{
     
    btn.style.background = '#272343'
    btn.style.color = 'white'
    selAns = btn.innerText
    console.log(`${Obj.correctAnswer}`.trim(' '))
    console.log(`${selAns}`.trim(' '))
       answerCont.append(message)


      if(selAns != `${Obj.correctAnswer}`){
        answerCont.append(message)
        answerCont.style.height= '80%'
        btn.style.border= '7px solid red'
        message.style.border= '7px solid red'
            message.innerHTML = 'Incorrect! <br> <span>&#9757;&#127997;</span> <br> <br><u>Click here</u><br>to try again!'
           message.style.display = 'block'
           
          
           
            next.addEventListener('click',()=>{
                message.style.display = 'none'
                


     })
  
            message.addEventListener('click',()=>{
                       message.style.display = 'none'
                       

                       
            })
            
            

  
      }else if(selAns == `${Obj.correctAnswer}`){
        message.innerHTML = 'Correct<br> Good Job! &#129305;&#127997;<br><br><u>Click next</u><br> to continue!'
        message.style.display= 'block'
        
        answerCont.append(message)
        
        message.addEventListener('click',()=>{
                   message.style.display = 'none'
                   })
        btn.addEventListener('click',()=>{
            message.style.display = 'none'})
        
         next.addEventListener('click',()=>{
            message.style.display = 'none'
         })
        message.style.border = ' 7px solid green'
        next.style.display = 'block'
        next.style.width = '35%'
        next.style.placeSelf = 'center'
        next.style.borderRadius = '10px'
        next.style.textAlign = 'center'
        btn.style.border = " 7px solid green"
      }
     })
    
    
});
}




let prev = document.getElementById('prev')
prev.style.display = 'none'
display(Question1)
let index = 1;
let next = document.getElementById('next')
next.style.display = 'none'
next.addEventListener('click',()=>{

index ++;

if(index == 1){
    for(let i =0; i<= 5; i++){
        answerCont.removeChild(answerCont.firstElementChild)
    }
    display(Question1)
    next.style.display = 'none'
}  if (index == 2){
    
    for(let i =0; i<= Question1.answers.length; i++){
        answerCont.removeChild(answerCont.firstElementChild)
    }
    display(Question2)
    next.style.display = 'none'
}  if( index == 3 ){
    
    for(let i =0; i<= Question2.answers.length; i++){
        answerCont.removeChild(answerCont.firstElementChild)
    }
    display(Question3)
    next.style.display = 'none'
}if( index == 4 ){
    
    for(let i =0; i<= Question3.answers.length; i++){
        answerCont.removeChild(answerCont.firstElementChild)
    }
    display(Question4)
    next.style.display = 'none'
}if( index == 5 ){

    for(let i =0; i<= Question4.answers.length; i++){
        answerCont.removeChild(answerCont.firstElementChild)
    }
    display(Question5)
    next.style.display = 'none'
}if( index == 6 ){
    
    for(let i =0; i<= Question5.answers.length; i++){
        answerCont.removeChild(answerCont.firstElementChild)
    }
    display(Question6)
    next.style.display = 'none'
}else if(index >= 7){

    for(let i =0; i<= Question6.answers.length; i++){
        answerCont.removeChild(answerCont.firstElementChild)
    }
       questCont.innerHTML = 'Great Job<br> <u>Restart Quiz</u>'
       questCont.addEventListener('click',()=>{
        location.reload();
       })
       questCont.style.fontSize = '40px'
       let logoI= document.createElement('img')
       logoI.classList.add('myImg')
       logoI.src= './Amazon Logo.png'
       logoI.style.width = "100%"
       logoI.style.height = "60%"
       answerCont.append(logoI)
       answerCont.style.marginBottom = '0'
       answerCont.style.paddingBottom = '5px'
       next.style.display = 'none'
      
}
})



console.log(index)