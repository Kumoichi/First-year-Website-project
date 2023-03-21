let score = 0;

function showScore(){
    const totalScore = document.getElementById('score-message');
    
    if(score === 3) {
        totalScore.innerHTML = score + " point: congratulation!"
    } else if(score === 2) {
        totalScore.innerHTML = score + " point: almost!";
    } else if(score === 1) {
        totalScore.innerHTML = score + "point: ok";
    } else {
        totalScore.innerHTML = score + " point: oh no";
    }   
}

const correct = 'correct';
const incorrect = 'incorrect';

function answerQuiz1() {
    const quiz_1 = document.getElementById('quiz-1');
    const select = 'first question' + quiz_1.answer.value;

    if (quiz_1.answer.value == 'a') {
        console.log(select);
        console.log(incorrect);

    } else if (quiz_1.answer.value == 'b') {
        score++;
        console.log(select);
        console.log(correct);
    } else if (quiz_1.answer.value == 'c') {
        console.log(select);
        console.log(incorrect);
    } else {
        alert('choose your answer');
    }
    console.log('socre right now is ：' + score); 
}

function answerQuiz2(){
    const quiz_2 = document.getElementById('quiz-2');
    const select = 'second question' + quiz_2.answer.value;

    if (quiz_2.answer.value == 'a') {
        score++;
        console.log(select);
        console.log(correct);
    } else if (quiz_2.answer.value == 'b') {    
        console.log(select);
        console.log(incorrect);
    } else if (quiz_2.answer.value == 'c') {
        console.log(select);
        console.log(incorrect);
    } else {
        alert('choose your answer');
    }
    console.log('score right now is :' + score); 
}

function answerQuiz3(){
    const quiz_3 = document.getElementById('quiz-3');
    const select = 'Third question' + quiz_3.answer.value;

    if (quiz_3.answer.value == 'a') {
        console.log(select);
        console.log(incorrect);
    } else if (quiz_3.answer.value == 'b') {        
        console.log(select);
        console.log(incorrect);

    } else if (quiz_3.answer.value == 'c') {
        score++;
        console.log(select);
        console.log(correct);
    } else {
        alert('choose your answer');
    }
    console.log('Score right now is ' + score); 
}