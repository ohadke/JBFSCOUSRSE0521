"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exam_1 = require("./exam");
var exam = new exam_1.Exam();
exam.addQuestion({
    caption: 'what do you get if you mix red and yellow',
    answers: [
        'Pink',
        'Orange',
        'Green',
        'White'
    ],
    correctIndex: 1
});
exam.addQuestion({
    caption: 'what do you get if you mix blue and yellow',
    answers: [
        'Pink',
        'Orange',
        'Green',
        'White'
    ],
    correctIndex: 3
});
exam.addQuestion({
    caption: 'what do you get if you mix blue and red',
    answers: [
        'Purple',
        'Cyan',
        'Magenta',
        'White'
    ],
    correctIndex: 2
});
exam.addQuestion({
    caption: 'what do you get if you mix green and magenta',
    answers: [
        'Ichs',
        'Brown',
        'Green',
        'White'
    ],
    correctIndex: 3
});
exam.print();
var ans1 = [0, 1, 2, 3]; // 50%
var ans2 = [3, 2, 1, 0]; // 0%
var ans3 = [1, 3, 2, 3, 4, 4, 4]; // 100% and not crash
console.log(ans1);
console.log(exam.grade(ans1));
console.log(ans2);
console.log(exam.grade(ans2));
console.log(ans3);
console.log(exam.grade(ans3));
//# sourceMappingURL=main.js.map