import React, { useState } from "react";
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import dateFormat from "dateformat"

const NewPost = () => {

    const formStyle = {
        margin: "auto",
        width: "50%",
        minWidth: "200px",
        padding: "10px 10px 50px 10px",
        justifyContent: "center"
    }

    const textAreaStyle = {
        height: "350px",
    }

    const nameDateStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }

    const formSpacingRight = {
        display: "flex",
        width: "48%",
        minWidth: "180px"
    }

    const formSpacingLeft = {
        display: "flex",
        width: "48%",
        minWidth: "180px"
    }

    const buttonStyle = {
        paddingTop: "50px",
        textAlign: "center",
    }

    const titleStyle = {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: "30px 30px 5px 30px"
    }

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

        await fetch("https://milestone-project-mern-backend.herokuapp.com/posts", {
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
            <div style={titleStyle}>
                <h1>Write Your Story</h1>
            </div>
            <Form style={formStyle} onSubmit={(e) => submitPost(e)}>
                <Form.Group style={{ display: "flex", flexDirection: "column" }}>
                    <div style={nameDateStyle}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Your Name"
                            className="mb-3"
                            style={formSpacingLeft}
                        >
                            <Form.Control type="text" placeholder="John Doe" onChange={(e) => setAuthor(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Today's Date"
                            className="mb-3"
                            size="md"
                            style={formSpacingRight}
                        >
                            <Form.Control type="date" defaultValue={dateFormatted} disabled />
                        </FloatingLabel>
                    </div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Blog Title"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="My Blog Post" onChange={(e) => setTitle(e.target.value)} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Blog Content"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Create a blog here!" style={textAreaStyle} onChange={(e) => setContent(e.target.value)} />
                    </FloatingLabel>
                </Form.Group>
                <div style={buttonStyle}>
                    <Button type="submit" style={{ backgroundColor: "#ECA72C", borderColor: "#ECA72C", color: "#313D53" }} >
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default NewPost