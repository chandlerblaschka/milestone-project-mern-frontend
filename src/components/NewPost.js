import React from "react";
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const NewPost = () => {

    const formStyle = {
        margin: "auto",
        width: "50%",
        padding: "10px",
        justifyContent: "center"
    }

    const textAreaStyle = {
        height: "250px",
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
        textAlign: "center"
    }

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
                            <Form.Control type="text" placeholder="John Doe" />
                        </FloatingLabel>
                        <Form.Control className="mb-3" size="md" type="date" style={formSpacingRight} />
                    </div>
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
                <div style={buttonStyle}>
                    <Button variant="dark" type="submit" >
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default NewPost