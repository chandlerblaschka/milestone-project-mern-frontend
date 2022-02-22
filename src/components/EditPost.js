import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { FloatingLabel, Form, Button } from "react-bootstrap"

const EditPost = () => {

    const { postId } = useParams()
    let [data, setData] = useState({})

    // Post values
    let [author, setAuthor] = useState("")
    let [title, setTitle] = useState("")
    let [date, setDate] = useState("")
    let [content, setContent] = useState("")

    const formStyle = {
        margin: "auto",
        width: "50%",
        padding: "10px 10px 50px 10px",
        justifyContent: "center"
    }

    const textAreaStyle = {
        height: "350px",
    }

    const nameDateStyle = {
        display: "flex",
        flexDirection: "row"
    }

    const formSpacingRight = {
        paddingLeft: "16px",
        display: "flex",
        width: "50%"
    }

    const formSpacingLeft = {
        paddingRight: "16px",
        display: "flex",
        width: "50%"
    }

    const buttonStyle = {
        paddingTop: "50px",
        textAlign: "center"
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/posts/${postId}`)
            const resData = await response.json()
            setData(resData)

            // Set post values
            setAuthor(resData.post_author)
            setTitle(resData.post_title)
            setDate(resData.post_date)
            setContent(resData.post_content)
        }
        fetchData()
    }, [])

    return (
        <div>
            <Form style={formStyle}>
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
                        <Form.Control className="mb-3" size="md" type="date" style={formSpacingRight} onChange={(e) => setDate(e.target.value)} />
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
                    <Button variant="light" type="submit" >
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default EditPost