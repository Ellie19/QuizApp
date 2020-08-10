var state = {
    questions: [{
            question: 'Computer Moniter is also known as:',
            answers: ['DVU', 'UDV', 'CCTV', 'VDU'],
            answerCorrect: 3
        },
        {
            question: 'Arrange in ascending order the units of memory TB, KB, GB, MB',
            answers: ['TB>MB>GB>KB', 'MB>GB>TB>KB', 'TB>GB>MB>KB', 'GB>MB>KB>TB0'],
            answerCorrect: 2
        },
        {
            question: 'The first programmer in the world was',
            answers: ['John D. Carmack', 'Ada Lovelace', 'Danielle Bunten', 'Ada Limón'],
            answerCorrect: 1
        },
        {
            question: 'The first computer mouse was made out of which material',
            answers: ['Steel', 'Iron', 'Plastic', 'Wood'],
            answerCorrect: 3
        },
        {
            question: 'The first programming language',
            answers: ['Cobol', 'C', 'FORTRAN', 'Objective C'],
            answerCorrect: 2
        },
        {
            question: 'Which of the following is not a compiled language?',
            answers: ['JavaScript', 'RUST', 'GO', 'SWIFT'],
            answerCorrect: 0
        },
        {
            question: 'Programmers Day is celebrated on',
            answers: ['20 Nov', '2 Dec', '8 Oct', '12 Sept'],
            answerCorrect: 3
        },
        {
            question: 'Did you know what is the most asked question on google?',
            answers: ['what is love', 'how to lose weight', 'what is my ip', 'what time is it'],
            answerCorrect: 2
        },
        {
            question: 'youtube was founded by 3 former employees of',
            answers: ['Google', 'PayPal', 'Amazon', 'Microsoft'],
            answerCorrect: 1
        },
        {
            question: 'First touch screen mobile was',
            answers: ['Iphone', 'Motorola XT8000', 'Samsung SGH-T919 ', 'IBM Simon'],
            answerCorrect: 3
        }
    ],

    currentQuestion: 0,
    userScore: 0
}


function clickStart() {
    $('.js-startPage').on('click', 'button', function(event) {

        $('.js-startPage').remove();
        $('#question-container').removeClass('hidden');
    })
};

function clickAnswer(chosenElement, state) {

    var chosenAnswer = $(chosenElement).val();

    //if the chosen answer is correct, then tell the user "correct", otherwise "wrong :("
    if (chosenAnswer == state.questions[state.currentQuestion].answerCorrect) {

        state.userScore += 1;
        $('.response1').text('Correct!');
    } else {
        $('.response1').text('Wrong :(');

        //add class "wrong answer" so that the button that was clicked can be
        //marked with a red colour
        $(chosenElement).addClass('wrong-answer');
    }

    //add class to the correct answer so that this can be highlighted in green
    $('.button' + state.questions[state.currentQuestion].answerCorrect).addClass('button-correct');

    //remove hover class from button so the highlighted answers will still stay red and green
    //when you hover over them
    $('button').removeClass('hover');

    //show result
    $('.result').removeClass('hidden');
    //show continue button
    $('.js-continue').removeClass('hidden');
    //disable the answer buttons so user cannot continue clicking them
    $('.js-answer').attr('disabled', true);

    return state;
}


function clickContinue(state) {
    //increment which question user is on by one when continue is clicked
    state.currentQuestion += 1;
    //hide continue button and result again, remove questions and answer
    $('.js-continue').addClass('hidden');
    $('.result').addClass('hidden');
    $('section').remove();

    //if quiz is done insert "you're done" and user's score
    //remove count and score from bottom of page
    if (state.currentQuestion > 9) {
        $('body').append('<h1 class="end">You\'re done! &#128522;</h1><p class ="endScore">You scored ' + state.userScore + " out of " + state.currentQuestion);
        $('.js-count').remove();
        $('.js-score').remove();

    } else {
        //if quiz is not done insert new question and answers and update user score and question count
        $('#question-container').append("<section class = 'question-container col-8'>" +
            "<p class='question'>" + state.questions[state.currentQuestion].question + "</p><br>" +
            "<button class='button0 js-answer hover' value = '0'>" + state.questions[state.currentQuestion].answers[0] + "</button><br>" +
            "<button class='button1 js-answer hover' value = '1'>" + state.questions[state.currentQuestion].answers[1] + "</button><br>" +
            "<button class='button2 js-answer hover' value = '2'>" + state.questions[state.currentQuestion].answers[2] + "</button><br>" +
            "<button class='button3 js-answer hover' value = '3'>" + state.questions[state.currentQuestion].answers[3] + "</button>" +
            "</section>");

        $('.js-count').text("Question: " + (state.currentQuestion + 1) + "/" + state.questions.length);
        $('.js-score').text("Correct: " + state.userScore + "/" + state.currentQuestion);
    }

}

$(function() {
    clickStart();
    $('#question-container').on('click', 'button', function(event) {

        clickAnswer($(this), state);
    });

    $('.js-continue').click(function(event) {

        clickContinue(state);
    });

});