import { KeyboardEvent, MouseEvent } from "react"

type ButtonProps = {
  handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void
}
// type ButtonProps = {
//   handleClick: (
//     event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTML/ButtonElement>,
//     id: number
//   ) => void
// }
const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={handleClick}>Button</button>
}

export default Button
