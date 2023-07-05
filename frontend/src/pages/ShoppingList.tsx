import { useNavigate } from "react-router-dom"

const ShoppingList = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>借用一覽</div>
      <p>應該要有所有使用者借用的材料</p>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default ShoppingList