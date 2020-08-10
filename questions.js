function Question(question, ans1, ans2, ans3, ans4, correct) {
    this.question = question;
    this.answers = [ans1, ans2, ans3, ans4];
    this.answerCorrect = correct;
}

var q1 = new Question('Computer Moniter is also known as:', 'DVU', 'UDV', 'CCTV', 'VDU', 3);
var q2 = new Question('Arrange in ascending order the units of memory TB, KB, GB, MB', 'TB>MB>GB>KB', 'MB>GB>TB>KB', 'TB>GB>MB>KB', 'GB>MB>KB>TB0', 2);
var q3 = new Question('The first programmer in the world was', 'John D. Carmack', 'Ada Lovelace', 'Danielle Bunten', 'Ada Limón', 1);
var q4 = new Question('The first computer mouse was made out of which material', 'Steel', 'Iron', 'Plastic', 'Wood', 3);
var q5 = new Question('The first programming language', 'Cobol', 'C', 'FORTRAN', 'Objective C', 2);
var q7 = new Question('Programmers Day is celebrated on', '20 Nov', '2 Dec', '8 Oct', '12 Sept', 3);
var q6 = new Question('Which of the following is not a compiled language?', 'JavaScript', 'RUST', 'GO', 'SWIFT', 0);
var q8 = new Question('Did you know what is the most asked question on google?', 'what is love', 'How to lose weight', 'what is my ip', 'what time is it', 2);
var q9 = new Question('youtube was founded by 3 former employees of', 'Google', 'PayPal', 'Amazon', 'Microsoft', 1);
var q10 = new Question('First touch screen mobile was', 'Iphone', 'Motorola XT8000', 'Samsung SGH-T919 ', 'IBM Simon', 3);

var list = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];