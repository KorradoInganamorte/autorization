import { FC } from "react"

interface InputProps {
  value?: string
  inputRef: React.RefObject<HTMLInputElement>
  placeholder: string
  name: string
}

const Input: FC<InputProps> = (props) => {
  return (
    <input
      ref={props.inputRef}
      className="py-[1.5rem] pl-[1.5rem] w-[38.5rem] bg-white rounded-[5px] border border-black text-lg"
      placeholder={props.placeholder}
      name={props.name}
    />
  )
}

export default Input
