import { observer } from "mobx-react-lite";
import QuestionEditor from "./QuestionEditor";
import Section from "../../models/section";

interface Props{
  section: Section
}

const SectionEditor = observer(function SectionEditor({section}: Props){
  return (
    <div>
      {section.question.map(question => (
        <QuestionEditor key={question.id} question={question} />
      ))}
    </div>
  )
})

export default SectionEditor