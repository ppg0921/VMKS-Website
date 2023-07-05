import { useNavigate } from "react-router-dom"

export const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div>Home Page</div>
      <p>
        歡迎來到 Virtual MakerSpace的首頁
        這裡空空如也
        <br></br>
        應該要有:簡略公告、常用連結、管理員班表
      </p>
      <div>
        <b>Announcement</b>
        <br></br>
        <button onClick={() => navigate("/AnnouncementPage")}>View all</button>
        <br></br>
        <b>常用連結</b>
        <br></br>
        <button>Edit</button>
        <br></br>
        <div>
          <b>班表</b>
        </div>
      </div>
    </div>
  )
}