import { useNavigate } from "react-router-dom"

const TutorialPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Tutorial Page</div>
      <p>理應要有新手教學，分為互動式和功能一覽</p>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default TutorialPage