import { makeAutoObservable } from "mobx"
import Question from "./question"

type SectionData = {
  id: number
  title: string
  question: Question[]
}

export default class Section implements SectionData{
  id: number;
  title: string;
  question: Question[];

  constructor(data: SectionData = {
    id: Date.now(),
    title: '',
    question: [new Question()],
  }){
    makeAutoObservable(this)

    this.id = data.id;
    this.title = data.title;
    this.question = data.question;
  }

  addQuestion(){
    this.question.push(new Question());
  }

  removeQuestion(id: number){
    this.question = this.question.filter(question => question.id !== id);
  }

  copyQuestion(id: number){
    const question = this.question.find(q => q.id === id);
    if(question){
      this.question.push(new Question({
        ...question,
        id: Date.now()
      }))
    }
  }
}
