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
        for (var _i = 0, _a = this.questionArr; _i < _a.length; _i++) {
            var question = _a[_i];
            console.log(question.caption);
            for (var _b = 0, _c = question.answers; _b < _c.length; _b++) {
                var option = _c[_b];
                console.log(option);
            }
            console.log("--------------------------");
        }
    };
    Exam.prototype.grade = function (answers) {
        var correctAnswers = 0;
        for (var i = 0; i < this.questionArr.length; ++i) {
            if (this.questionArr[i].correctAnswer == answers[i]) {
                ++correctAnswers;
            }
        }
        return ((correctAnswers / this.questionArr.length) * 100);
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=Exam.js.map