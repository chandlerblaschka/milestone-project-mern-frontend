import dateFormat from "dateformat"
import React, { useEffect, useState } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { BsFillPersonFill, BsTrash } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
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
  const dateComments = dateFormat(date, "mmmm dS, yyyy")
  const textAreaStyle = {
    height: "100px",
  }
  const formSpacingRight = {
    marginLeft: "16px",
    display: "flex",
    width: "50%",
    fontSize: "10px",
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
        <div key={index}>
          <div className='commentHeader'>
            <h4 style={{ display: "flex", alignItems: "center", margin: "0" }}>
              <BsFillPersonFill />
              {comment.comment_author}
            </h4>
            <p className='commentDate'>{dateComments}</p>
          </div>
          <p className='commentContent'>{comment.comment_content}</p>
        </div>
      )
    })
  }
  return (
    <div className='showPostContainer'>
      <div className='showPost'>
        <center>
          <h1 className='postTitle'>{data.post_title}</h1>
        </center>
        <div className='titleBtn'>
          <div className='authorFormat'>
            <h1 className='postAuthor'>{data.post_author}</h1>
          </div>
          <div className='contentBtn'>
            <Button
              className='button'
              variant='primary'
              size='sm'
              onClick={() => props.deletePost(postId)}
            >
              <BsTrash />
            </Button>

            <Link to={`/editPost/${postId}`}>
              <Button className='button' variant='primary' size='sm'>
                <FiEdit />
              </Button>
            </Link>
          </div>
        </div>
        <h1 className='postDate'>{dateFormatted}</h1>
        <p className='postDesc'>{data.post_content}</p>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <h2>Write a comment</h2>
          <div style={nameDateStyle}>
            <FloatingLabel
              controlId='floatingInput'
              label='Your Name'
              className='mb-3'
              style={formSpacingLeft}
              size='sm'
            >
              <Form.Control
                type='text'
                size='sm'
                placeholder='John Doe'
                onChange={(e) => setAuthor(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId='floatingInput'
              label="Today's Date"
              className='mb-3'
              size='sm'
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
        <div className='commentSubmit'>
          <Button
            className='commentBtn'
            variant='primary'
            size='sm'
            type='submit'
            onClick={(e) => submitComment(e)}
          >
            Submit
          </Button>
        </div>
        {commentsDisplay}
      </div>
    </div>
  )
}
