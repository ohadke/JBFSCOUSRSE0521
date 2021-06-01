import { Component } from '@angular/core';
import { Question } from './model/question';
import { QUESTIONS } from './model/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentQuestion: Question;
  currentQuestionIndex: number;

  summary: Question[]; //A collection of questions the user has already answered
  isQuizOver: boolean;

  constructor() {
    this.currentQuestionIndex = 0;
    this.currentQuestion = QUESTIONS[this.currentQuestionIndex];
    this.summary = [];
    this.isQuizOver = false;
  }

  UserSelectedAnswer(answer: string){
    if(this.isQuizOver == false){
      this.currentQuestion.userAnswer = this.currentQuestion.answers.indexOf(answer);

      this.summary.push(this.currentQuestion);
      ++this.currentQuestionIndex;
      this.currentQuestion = QUESTIONS[this.currentQuestionIndex];

      if(!this.currentQuestion){
        this.isQuizOver = true;
      }
    }
  }
}
