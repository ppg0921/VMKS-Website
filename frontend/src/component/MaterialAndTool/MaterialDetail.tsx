import React from 'react'
import { useNavigate, useParams } from "react-router-dom"

const Material = () => {
  const {MaterialId} = useParams()
  const navigate =  useNavigate()
  return (
    <>
        <div>
            所有詳細資料、照片、buy and scrap button
        </div>
        <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default Material