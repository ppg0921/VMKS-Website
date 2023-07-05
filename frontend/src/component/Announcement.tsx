import React from 'react'
import { useNavigate } from "react-router-dom"

const Announcement = () => {
  const navigate =  useNavigate()
  return (
    <>
        <div>
            應該有公告名稱、日期與內文
        </div>
        <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default Announcement