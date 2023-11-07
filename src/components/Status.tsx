type StatusProps = {
  status: "loading" | "error" | "success"
}
const Status = ({ status }: StatusProps) => {
  let message
  if (status === "loading") message = "Loading ..."
  if (status === "success") message = "Data fetched successfully!"
  if (status === "error") message = "Error fetching data"
  return <div>{message}</div>
}

export default Status
