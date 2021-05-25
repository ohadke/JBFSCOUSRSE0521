import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my calculator';
  number2: number =0 ;
  number1: number =0 ;
  resOfAdd:number=0;
  resOfMultiply: number =0;
  resOfSubstract: number =0;
  showRes:boolean= false;
  calculateResult()
  {
    this.showRes=true;
    this.resOfAdd=this.number1+this.number2;
    this.resOfMultiply=this.number1*this.number2;
    this.resOfSubstract=this.number1-this.number2;
    console.log("yost");
  }
  setValueFromInputForNumber1(val:string)
  {
    this.number1=parseInt(val);

  }
  setValueFromInputForNumber2(val:string)
  {
    this.number2=parseInt(val);
  }
}
