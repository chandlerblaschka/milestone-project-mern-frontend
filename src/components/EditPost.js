import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { FloatingLabel, Form, Button } from "react-bootstrap"
import dateFormat from "dateformat"

const EditPost = () => {

    const { postId } = useParams()

    // Post values
    let [author, setAuthor] = useState("")
    let [title, setTitle] = useState("")
    let [date, setDate] = useState("")
    let [content, setContent] = useState("")

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
        textAlign: "center"
    }

    const titleStyle = {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: "30px 30px 5px 30px"
    }

    const dateFormatted = dateFormat(date, "yyyy-mm-dd")

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://milestone-project-mern-backend.herokuapp.com/posts/${postId}`)
            const resData = await response.json()

            // Set post values
            setAuthor(resData.post_author)
            setTitle(resData.post_title)
            setDate(Date.now())
            setContent(resData.post_content)
        }
        fetchData()
    }, [])

    const submitUpdate = async (e) => {
        e.preventDefault()
        const post = {
            post_author: author,
            post_title: title,
            post_date: date,
            post_content: content
        }

        await fetch(`https://milestone-project-mern-backend.herokuapp.com/posts/${postId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        window.location = "/"
    }

    return (
        <div className="formBackground">
            <div style={titleStyle}>
                <h1>Edit Post</h1>
            </div>
            <Form style={formStyle} onSubmit={(e) => submitUpdate(e)}>
                <Form.Group style={{ display: "flex", flexDirection: "column" }}>
                    <div style={nameDateStyle}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Your Name"
                            className="mb-3"
                            style={formSpacingLeft}
                        >
                            <Form.Control type="text" placeholder="John Doe" onChange={(e) => setAuthor(e.target.value)} defaultValue={author} />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Today's Date"
                            className="mb-3"
                            size="md"
                            style={formSpacingRight}
                        >
                            <Form.Control type="date" onChange={(e) => setDate(e.target.value)} defaultValue={dateFormatted} disabled />
                        </FloatingLabel>
                    </div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Blog Title"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="My Blog Post" onChange={(e) => setTitle(e.target.value)} defaultValue={title} />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Blog Content"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Create a blog here!" style={textAreaStyle} onChange={(e) => setContent(e.target.value)} defaultValue={content} />
                    </FloatingLabel>
                </Form.Group>
                <div style={buttonStyle}>
                    <Button variant="light" type="submit" >
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default EditPost