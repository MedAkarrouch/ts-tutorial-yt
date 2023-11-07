import { ChangeEvent } from "react"

type InputProps = {
  value: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const Input = ({ value, handleChange }: InputProps) => {
  return <input type="text" value={value} onChange={handleChange} />
}

export default Input
