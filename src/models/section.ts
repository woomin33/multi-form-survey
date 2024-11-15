import { makeAutoObservable } from "mobx"
import Question from "./question"

type SectionData = {
  id: number
  title: string
  description: string
  question: Question[]
}

export default class Section implements SectionData{
  id: number;
  title: string;
  description: string;
  question: Question[];

  constructor(data: SectionData = {
    id: Date.now(),
    title: '',
    description: '',
    question: [new Question()],
  }){
    makeAutoObservable(this, {}, { autoBind: true })

    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.question = data.question;
  }

  setTitle(title: string){
    this.title = title;
  }

  setDescription(description: string){
    this.description = description;
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
