import { useNavigate } from "react-router-dom"

const MapPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Map Page</div>
      <p>應該要有2D地圖，並連結3D地圖</p>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default MapPage