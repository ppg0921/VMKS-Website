import { useNavigate } from "react-router-dom"

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Page Not Found</div>
      <button onClick={() => navigate("/")}>back to home</button>
    </>
  )
}