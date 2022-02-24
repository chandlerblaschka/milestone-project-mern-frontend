import dateFormat from "dateformat"
import React, { useEffect, useState } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import "./showpost.css"
export default function ShowPost(props) {
  const { postId } = useParams()
  let [author, setAuthor] = useState("")
  let [data, setData] = useState({})
  let [date, setDate] = useState(Date.now())

  const dateFormatted = dateFormat(date, "yyyy-mm-dd")
  const formSpacingRight = {
    paddingLeft: "16px",
    display: "flex",
    width: "50%",
  }

  const formSpacingLeft = {
    paddingRight: "16px",
    display: "flex",
    width: "50%",
  }
  const nameDateStyle = {
    display: "flex",
    flexDirection: "row",
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/posts/${postId}`)
      const resData = await response.json()
      setData(resData)
    }
    fetchData()
  }, [])

  return (
    <div className='showPost'>
      <center>
        <h1 className='postTitle'>{data.post_title}</h1>
      </center>
      <h1>{data.post_author}</h1>
      <h1 className='postDate'>{data.post_date}</h1>
      <p className='postDesc'>{data.post_content}</p>
      <Button onClick={() => props.deletePost(postId)}>DELETE</Button>{" "}
      <Link to={`/editPost/${postId}`}>
        {/* <Button href='#'>EDIT</Button> */}Edit
      </Link>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <div style={nameDateStyle}>
          <FloatingLabel
            controlId='floatingInput'
            label='Your Name'
            className='mb-3'
            style={formSpacingLeft}
          >
            <Form.Control
              type='text'
              placeholder='John Doe'
              onChange={(e) => setAuthor(e.target.value)}
            />
          </FloatingLabel>
          <Form.Control
            className='mb-3'
            size='md'
            type='date'
            style={formSpacingRight}
            defaultValue={dateFormatted}
            disabled
          />
        </div>
        <Form.Label>Comment</Form.Label>
        <Form.Control as='textarea' rows={3} />
      </Form.Group>
      <Button>Submit</Button>
    </div>
  )
}
