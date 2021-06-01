import { Question } from "./Question";

export class Exam{
    private questionArr : Question[] = [];

    addQuestion(question: Question): void{
        this.questionArr.push(question);
    }

    print(){
        for(const question of this.questionArr){
            console.log(question.caption);
            
            for(const option of question.answers){
                console.log(option);
            }

            console.log("--------------------------")
        }
    }

    grade(answers: number[]): number{
        let correctAnswers : number = 0;

        for(let i = 0; i < this.questionArr.length; ++i){
            if(this.questionArr[i].correctAnswer == answers[i]){
                ++correctAnswers;
            }
        }

        return ((correctAnswers / this.questionArr.length) * 100);
    }
}