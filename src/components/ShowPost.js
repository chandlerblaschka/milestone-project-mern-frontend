import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"

export default function ShowPost(props) {
  const { postId } = useParams()
  //const data = props.data[postId]
  const navigate = useNavigate()
  let [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/posts/${postId}`)
      const resData = await response.json()
      setData(resData)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>{data.post_title}</h1>
      <Button onClick={() => props.deletePost(postId)}>DELETE</Button>{" "}
      <Button href='#'>EDIT</Button>
    </div>
  )
}
