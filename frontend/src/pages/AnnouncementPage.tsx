import { useNavigate , Link} from "react-router-dom"
const AnnouncementPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>公告一覽</div>
      <p>應該要有所有公告連結</p>
      1.  <Link to={'/Announcement/'+0}>Each Announcement</Link> {/* +id */}
      <br></br>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default AnnouncementPage