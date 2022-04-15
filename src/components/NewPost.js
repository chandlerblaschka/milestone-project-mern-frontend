import React, { useState } from "react";
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import dateFormat from "dateformat"

const NewPost = () => {

    let [author, setAuthor] = useState("")
    let [title, setTitle] = useState("")
    let [date, setDate] = useState(Date.now())
    let [content, setContent] = useState("")

    const dateFormatted = dateFormat(date, "yyyy-mm-dd")

    const submitPost = async (e) => {
        e.preventDefault()
        const post = {
            post_author: author,
            post_title: title,
            post_date: date,
            post_content: content
        }

        await fetch("https://blogit-csb.herokuapp.com/posts", {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        window.location = "/"
    }

    return (
        <div className='formBackground'>
            {/* Photo by <a href="https://unsplash.com/@christinhumephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christin Hume</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
            <div className="formTitleStyle">
                <h1>Write Your Story</h1>
            </div>
            <Form className="formStyle" onSubmit={(e) => submitPost(e)}>
                <Form.Group className="formGroupStyle">
                    <div className="nameDateStyle">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Your Name"
                            className="mb-3 formSpacingLeft"
                        >
                            <Form.Control required type="text" placeholder="John Doe" onChange={(e) => setAuthor(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Today's Date"
                            className="mb-3 formSpacingRight"
                            size="md"
                        >
                            <Form.Control required type="date" defaultValue={dateFormatted} disabled />
                        </FloatingLabel>
                    </div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Blog Title"
                        className="mb-3"
                    >
                        <Form.Control required type="text" placeholder="My Blog Post" onChange={(e) => setTitle(e.target.value)} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Blog Content"
                        className="mb-3"
                    >
                        <Form.Control required as="textarea" placeholder="Create a blog here!" className="textAreaStyle" onChange={(e) => setContent(e.target.value)} />
                    </FloatingLabel>
                </Form.Group>
                <div className="buttonDivStyle">
                    <Button type="submit" className="buttonStyle" >
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default NewPost