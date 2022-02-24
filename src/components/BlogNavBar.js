import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const BlogNavBar = () => {

    const navStyle = {
        backgroundColor: "#2D384D",
    }

    return (
        <Navbar style={navStyle} fixed="top">
            <Container >
                <Link to="/" className="nav-link" style={{ padding: "5px 10px 5px 10px" }} >
                    <Navbar.Brand style={{ color: "#ECA72C", border: "#ECA72C 2px solid", padding: "5px 10px 5px 10px" }} >Blog.it</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Link to="/" className="nav-link" style={{ color: "#ECA72C" }}>Posts</Link>
                    <Link to="/newPost" className="nav-link" style={{ color: "#ECA72C" }}>Create Post</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default BlogNavBar