import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const BlogNavBar = () => {

    return (
        <Navbar className="navStyle" fixed="top">
            <Container >
                <Link to="/" className="nav-link"  >
                    <Navbar.Brand className="navBrand" >Blog.it</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Link to="/" className="nav-link navLink">Posts</Link>
                    <Link to="/newPost" className="nav-link navLink" >Create Post</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default BlogNavBar