import dateFormat from "dateformat"
import React, { useEffect, useState } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { BsFillPersonFill, BsTrash } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import { Link, useParams } from "react-router-dom"
import "../css/showPost.css"

export default function ShowPost(props) {
  const { postId } = useParams()
  let [author, setAuthor] = useState("")
  let [data, setData] = useState({})
  let [postDate, setPostDate] = useState('')
  let [date, setDate] = useState(Date.now())
  let [content, setContent] = useState({})
  let [comments, setComments] = useState([])
  const dateFormattedToday = dateFormat(date, "yyyy-mm-dd")
  let dateFormatted = dateFormat(`${postDate}`, "mmmm dS, yyyy")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://blogit-csb.herokuapp.com/posts/${postId}`
      )
      const resData = await response.json()
      setData(resData)
      setComments(resData.comments)
      setPostDate(resData.post_date)
    }
    fetchData()
  }, [postId])

  const submitComment = async (e) => {
    e.preventDefault()
    const comment = {
      comment_author: author,
      comment_date: date,
      comment_content: content,
      post: postId,
    }
    await fetch(
      `https://blogit-csb.herokuapp.com/comments`,
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

      let commentDate = dateFormat(comment.comment_date, "mmmm dS, yyyy")

      return (
        <div key={index}>
          <div className='commentHeader'>
            <h5 className="showH5">
              <BsFillPersonFill />
              {comment.comment_author}
            </h5>
            <p className='commentDate'>{commentDate}</p>
            <div>
              <Button
                className='button'
                variant='primary'
                size='sm'
                onClick={() => props.deleteComment(comment._id)}
              >
                <BsTrash />
              </Button>
            </div>
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
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <h4>Write a comment</h4>
            <div className="showNameDateStyle">
              <FloatingLabel
                controlId='floatingInput'
                label='Your Name'
                className='mb-3 showFormSpacingLeft'
              >
                <Form.Control
                  required
                  type='text'
                  size='sm'
                  placeholder='John Doe'
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId='floatingInput'
                label="Today's Date"
                className='mb-3 showFormSpacingRight'
                size='sm'
              >
                <Form.Control
                  required
                  type='date'
                  defaultValue={dateFormattedToday}
                  disabled
                  className="showFormFont"
                />
              </FloatingLabel>
            </div>
            <FloatingLabel
              controlId='floatingInput'
              label='Comment'
              className='mb-3 showFormFont'
            >
              <Form.Control
                required
                as='textarea'
                placeholder='Create a blog here!'
                className="showTextAreaStyle"
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
        </Form>
        {commentsDisplay}
      </div>
    </div>
  )
}
