import { useSurveyStore } from "../../store"
import SectionEditor from "./SectionEditor"



export default function SectionEditorList(){
  const surveyStore = useSurveyStore()

  return(
    <div className="relative">
      <div className="absolute top-0 -right-50">
        <button className="" onClick={() => surveyStore.addQuestion()}>+</button>
      </div>
      <div>
        {surveyStore.sections.map(section => (
          <SectionEditor key={section.id} section={section} />
        ))}
      </div>
    </div>
  )
}