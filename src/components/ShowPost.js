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
  let [content, setContent] = useState({})
  let [comments, setComments] = useState([])
  const dateFormattedToday = dateFormat(date, "yyyy-mm-dd")
  const dateFormatted = dateFormat(date, "mmmm dS, yyyy")
  const textAreaStyle = {
    height: "100px",
  }
  const formSpacingRight = {
    marginLeft: "16px",
    display: "flex",
    width: "50%",
  }
  const buttonStyle = {
    paddingTop: "50px",
    textAlign: "center",
  }
  const formSpacingLeft = {
    marginRight: "16px",
    display: "flex",
    width: "50%",
  }
  const nameDateStyle = {
    display: "flex",
    flexDirection: "row",
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://milestone-project-mern-backend.herokuapp.com/posts/${postId}`
      )
      const resData = await response.json()
      setData(resData)
      setComments(resData.comments)
      console.log(resData)
    }
    fetchData()
  }, [])

  const submitComment = async (e) => {
    e.preventDefault()
    const comment = {
      comment_author: author,
      comment_date: date,
      comment_content: content,
      post: postId,
    }
    await fetch(
      `https://milestone-project-mern-backend.herokuapp.com/comments`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    )
    window.location = `/postShow/${postId}`
  }
  let commentsDisplay = <p>no comments yet</p>
  if (comments) {
    commentsDisplay = comments.map((comment, index) => {
      return (
        <div>
          <h2>{comment.comment_author}</h2>
          <p>{comment.comment_date}</p>
          <p>{comment.comment_content}</p>
        </div>
      )
    })
  }
  return (
    <div className='showPost'>
      <center>
        <h1 className='postTitle'>{data.post_title}</h1>
      </center>
      <h1 className='postAuthor'>{data.post_author}</h1>
      <h1 className='postDate'>{dateFormatted}</h1>
      <p className='postDesc'>{data.post_content}</p>
      <Button
        className='btn'
        variant='primary'
        size='sm'
        onClick={() => props.deletePost(postId)}
      >
        DELETE
      </Button>{" "}
      <Link to={`/editPost/${postId}`}>
        <Button variant='primary' size='sm'>
          Edit
        </Button>
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
          <FloatingLabel
            controlId='floatingInput'
            label="Today's Date"
            className='mb-3'
            size='md'
            style={formSpacingRight}
          >
            <Form.Control
              type='date'
              defaultValue={dateFormattedToday}
              disabled
            />
          </FloatingLabel>
        </div>
        <FloatingLabel
          controlId='floatingInput'
          label='Comment'
          className='mb-3'
        >
          <Form.Control
            as='textarea'
            placeholder='Create a blog here!'
            style={textAreaStyle}
            onChange={(e) => setContent(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>
      <Button
        className='btnSubmit'
        variant='primary'
        size='sm'
        type='submit'
        onClick={(e) => submitComment(e)}
      >
        Submit
      </Button>
      {commentsDisplay}
    </div>
  )
}
