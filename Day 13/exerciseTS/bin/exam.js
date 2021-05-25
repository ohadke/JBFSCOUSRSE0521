"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam() {
        this.questionArr = [];
    }
    Exam.prototype.addQuestion = function (question) {
        this.questionArr.push(question);
    };
    Exam.prototype.print = function () {
        this.questionArr.forEach(function (element) {
            console.log(element.caption);
            element.answers.forEach(function (element1) {
                console.log(element1);
            });
            console.log(element.correctIndex);
        });
    };
    Exam.prototype.grade = function (answers) {
        var score = 0;
        var i = 0;
        this.questionArr.forEach(function (element) {
            if (element.correctIndex === answers[i]) {
                score++;
            }
            i++;
        });
        return (score / this.questionArr.length * 100);
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=exam.js.map