type Person = {
  first: string
  last: string
}
type PropsType = {
  names: Person[]
}
const PersonList = ({ names }: PropsType) => {
  return <div>PersonList</div>
}

export default PersonList
