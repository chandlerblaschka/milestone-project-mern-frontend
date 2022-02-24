import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const BlogNavBar = () => {

    const navStyle = {
        backgroundColor: "#313D53",

    }

    return (
        <Navbar style={navStyle} fixed="top">
            <Container style={{ color: "#313D53" }}>
                <Link to="/" className="nav-link">
                    <Navbar.Brand>Blog.it</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Posts</Link>
                    <Link to="/newPost" className="nav-link">Create Post</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default BlogNavBar