import { Question } from "./question";





 export class Exam{
     private questionArr : Question[] =  [];
     addQuestion(question: Question):void{
        this.questionArr.push(question);
     }
     print():void{
        this.questionArr.forEach(element => {
            console.log(element.caption);
            element.answers.forEach(element1=> {
                console.log(element1);
            });

            console.log(element.correctIndex);
          
        });
        }
        grade(answers: number[] ): number
        {
            let score=0;
            let i=0;
            this.questionArr.forEach(element => {
                if(element.correctIndex===answers[i])
                {
                    score++;
                }
               i++;
             });
            return (score/this.questionArr.length*100);
        }


     

    
}