import { Exam } from "./Exam";
import { Question } from "./Question";

let exam: Exam = new Exam();

exam.addQuestion({
    caption: 'How much is 1 + 0',
    answers: ['1', '2', '3', '4'],
    correctAnswer: 0
});

exam.addQuestion({
    caption: 'How much is 1 + 1',
    answers: ['1', '2', '3', '4'],
    correctAnswer: 1
});

exam.addQuestion({
    caption: 'How much is 1 + 2',
    answers: ['1', '2', '3', '4'],
    correctAnswer: 2
});

exam.addQuestion({
    caption: 'How much is 1 + 3',
    answers: ['1', '2', '3', '4'],
    correctAnswer: 3
});

exam.print();

console.log(exam.grade([0,1,2,3]));
console.log(exam.grade([0,1,2,1,5]));
console.log(exam.grade([0,0,0,1,0]));