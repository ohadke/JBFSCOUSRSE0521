import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {
  @Input() //properties
  question!: Question;

  @Output() //event
  userChoice = new EventEmitter<string>();

  //action
  onSelectAnswer(answer: string){
    this.userChoice.emit(answer);
  }

  ngOnInit(): void {
  }
}

