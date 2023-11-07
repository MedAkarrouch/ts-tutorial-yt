type PropsType = {
  name: string
  messageCount: number
}
const Greet = ({ name, messageCount }: PropsType) => {
  return (
    <div>
      <h2>
        Welcome {name}! You have {messageCount} unread messages
      </h2>
    </div>
  )
}

export default Greet
