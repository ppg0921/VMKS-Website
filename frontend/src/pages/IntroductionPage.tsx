import { useNavigate } from "react-router-dom"

const IntroductionPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Introduction Page</div>
      {/* <button onClick={() => navigate('/Tutorial')}>Go to tutorial</button> */}
      <p>
        這裡需要有簡介、管理員班表、使用者規範
      </p>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default IntroductionPage