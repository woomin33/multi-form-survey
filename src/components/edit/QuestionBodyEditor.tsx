import Question from "../../models/question";
import Input from "../common/Input";
import OptionEditor from "./OptionEditor";

interface QuestionBodyEditorProps{
  question: Question
}

export default function QuestionBodyEditor({question}: QuestionBodyEditorProps){
  switch(question.type){
    case 'shortText':
    case 'longText':
    case 'date':
    case 'time':
      return <Input disabled />
    case 'multipleChoice':
    case 'checkbox':
    case 'dropdown':
      return <OptionEditor question={question} />
    default:
      return null
  }
}