import { createContext, ReactNode, RefObject, useCallback, useContext, useState } from "react";
import useOutsideClick from "../../hooks/common/useOutsideClick";

interface DropdownProps<T>{
  placeholder?: string
  options: DropdownOption<T>[]
  onChange?: (value: T) => void
}

export default function Dropdown<T>({ placeholder, options, onChange}: DropdownProps<T>){
  const [opened, setOpened] = useState(false)
  const [selected, setSelected] = useState(-1)

  const open = useCallback(() => setOpened(true), [])
  const close = useCallback(() => setOpened(false), [])

  const handleChange = useCallback((index: number) => {
    setSelected(index)
    onChange?.(options[index].value)
    close()
  }, [close, onChange, options])

  return (
    <DropdownContext.Provider value={{
      opened, open, close, options, selected, onChange: handleChange
    }}>
      <div className="text-left inline-block relative">
        <DropdownButton placeholder={placeholder} />
        <DropdownMenu />
      </div>
    </DropdownContext.Provider>
  )
}

type DropdownOption<T> = {
  label: ReactNode
  value: T
}

interface DropdownContextType<T = unknown>{
  opened: boolean
  open: () => void
  close: () => void
  options: DropdownOption<T>[]
  selected: number
  onChange: (index: number) => void
}

const DropdownContext = createContext<DropdownContextType | null>(null)

function DropdownButton({placeholder = "select"}: {placeholder?: string}){
  const { open, options, selected } = useContext(DropdownContext)!

  return (
    <button className="border border-gray-300 rounded-10 min-w-197 p-16 pr-36 relative text-left" onClick={open}>{selected >= 0 ? options[selected].label : placeholder ?? ''}
    <span className="absolute right-12 top-1/2 transform -translate-y-1/2 ">▼</span>
    </button>
  )
}

function DropdownMenu(){
  const { close, opened, options, onChange } = useContext(DropdownContext)!
  const containerRef = useOutsideClick(close)

  return(
    opened ? (
      <div ref={containerRef as RefObject<HTMLDivElement>} className="absolute left-0 top-62 border border-gray-300 rounded-10 flex flex-col min-w-197 bg-white">
        {options.map((option, index) => (
          <DropdownMenuItem key={`${option.value}`} label={option.label} onSelect={() => onChange(index)} />
        ))}
      </div>
    ) : null
  )
}

function DropdownMenuItem({ label, onSelect }: { label: ReactNode; onSelect: () => void}){
  return (
    <button className="text-left p-14 border-b-1 border-gray-300 last:border-b-0" onClick={onSelect}>{label}</button>
  )
}