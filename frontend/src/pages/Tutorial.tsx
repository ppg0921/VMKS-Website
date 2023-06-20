import { useNavigate } from "react-router-dom"

const Tutorial = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Tutorial Page</div>
      <p>理應要有新手教學</p>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default Tutorial