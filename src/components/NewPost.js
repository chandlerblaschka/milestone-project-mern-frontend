import React from "react";
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel";

const NewPost = () => {

    const formStyle = {
        margin: "auto",
        width: "50%",
    }

    const textAreaStyle = {
        height: "250px",
    }

    const formFormat = {
        width: "50%",
        display: "flex"
    }

    return (
        <div>
            <Form style={formStyle}>
                <Form.Group style={{ display: "flex", flexDirection: "column" }}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Name"
                        className="mb-3"
                        style={formFormat}
                    >
                        <Form.Control type="text" placeholder="John Doe" />
                    </FloatingLabel>
                    <Form.Control className="mb-3" size="md" type="date" style={formFormat} />
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Blog Title"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="My Blog Post" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Blog Content"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Create a blog here!" style={textAreaStyle} />
                    </FloatingLabel>
                </Form.Group>
            </Form>
        </div>
    )
}

export default NewPost