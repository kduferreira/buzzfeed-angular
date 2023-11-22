import { Component, OnInit } from '@angular/core';
import quiz_questions from "../../../assets/data/quiz_questions.json"
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})


export class QuizComponent implements OnInit {

  title: string = ''
  questions: any
  questionSelected:any


  answeres:string[] = []
  answerSelected: string = ''


  questionsIndex:number = 0
  questionMaxIndex:number = 0


  finished:boolean = false
  constructor(){

  }

  ngOnInit(): void {
 if(quiz_questions){
  this.finished = false
  this.title = quiz_questions.title

  this.questions = quiz_questions.questions
  this.questionSelected = this.questions[this.questionsIndex]
  this.questionsIndex = 0
  this.questionMaxIndex = this.questions.length

  console.log(this.questionsIndex)
  console.log(this.questionMaxIndex)
 }
  }

  buttonPress(value:string){
 this.answeres.push(value)
 console.log(this.answeres)
 console.log("teste")
  }

  async nextStep(){
    this.questionsIndex+=1

    if(this.questionMaxIndex > this.questionsIndex){
      this.questionSelected = this.questions[this.questionsIndex]
    }else{
      this.finished = true
    }
  }
}
