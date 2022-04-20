import React from "react"
import { Navbar, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Link to="/" className="nav-link"  >
                    <Navbar.Brand style={{ color: "#ECA72C", border: "#ECA72C 2px solid", padding: "5px 10px 5px 10px" }}>Blog.it</Navbar.Brand>
                </Link>
                <Container>
                    Made by <a href="https://www.linkedin.com/in/nik-poliarco-3aaa181a3/" target="_blank" rel="noreferrer">Albert Nikolai Poliarco</a>, <a href="https://www.linkedin.com/in/chandler-blaschka-532547b2/" target="_blank" rel="noreferrer">Chandler Blaschka</a>, and <a href="https://portfolio-dfs.herokuapp.com/" target="_blank" rel="noreferrer">Derek Slauson</a>
                </Container>
            </Container>
        </Navbar>
    )
}

export default Footer