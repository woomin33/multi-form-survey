import { ReactNode, useState } from "react"
import { QuestionType } from "../../types/app"
import Input from "../common/Input"
import RadioIcon from '../../assets/icons/radio_button_unchecked.svg?react'
import CheckIcon from '../../assets/icons/check_box_outline_blank.svg?react'

interface OptionEditorProps {
  type: QuestionType
}

export default function OptionEditor({type}: OptionEditorProps){
  const [options, setOptions] = useState<string[]>([''])

  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="flex items-center">
          {icons[type]}
          <Input value={option} onChange={(e) => {
            const newOptions = [...options]
            newOptions[index] = e.target.value
            setOptions(newOptions)
          }} />
        </div>
      ))}
      <div className="flex items-center mt-28">
        {icons[type]}
        <button className="text-gray500 text-16" onClick={() => {
          setOptions(prev => [...prev, ''])
        }}>
          옵션추가
        </button>
      </div>
    </div>
  )
}

const icons: Partial<Record<QuestionType, ReactNode>> = {
  'multipleChoice': <RadioIcon className="mr-14"/>,
  'checkbox': <CheckIcon className="mr-14"/>,
  'dropdown': <RadioIcon className="mr-14"/>,
}