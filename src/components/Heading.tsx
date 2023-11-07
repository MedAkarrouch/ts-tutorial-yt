import { ReactNode } from "react"

type HeadingPops = {
  children?: ReactNode
}
const Heading = ({ children }: HeadingPops) => {
  return <div>{children}</div>
}

export default Heading
