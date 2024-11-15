import PlusIcon from '../../assets/icons/add_circle.svg?react'
import ImageIcon from '../../assets/icons/image.svg?react'
import SectionPlusIcon from '../../assets/icons/view_comfy.svg?react'
import { useSurveyStore } from '../../store'
import cn from 'classnames'

export default function EditorMenu({ className }: Cn){
  const surveyStore = useSurveyStore();

  return(
    <div className={cn('bg-white rounded-10 px-13 py-26 flex flex-col gap-y-26 shadow-sm', className)}>
      <button onClick={surveyStore.addQuestion} ><PlusIcon /></button>
      <button><ImageIcon /></button>
      <button onClick={surveyStore.addSection} ><SectionPlusIcon /></button>
    </div>
  )
}