import { observer } from "mobx-react-lite";
import QuestionEditor from "./QuestionEditor";
import Section from "../../models/section";
import SectionTitleEditor from "./SectionTitleEditor";

interface Props{
  section: Section
}

const SectionEditor = observer(function SectionEditor({section}: Props){
  return (
    <div className="[&>*]:mb-24">
      <SectionTitleEditor section={section} capTitle="2개 중 1섹션" />
      {section.question.map(question => (
        <QuestionEditor key={question.id} question={question} />
      ))}
    </div>
  )
})

export default SectionEditor