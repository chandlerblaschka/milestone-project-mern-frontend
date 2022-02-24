import { Navbar, Container, Nav } from "react-bootstrap"

const Footer = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Blog.it</Navbar.Brand>
                <Nav.Link href="#" disabled>
                    Made by <a href="#">Albert Nikolai Poliarco</a>, <a href="#">Chandler Blaschka</a>, and <a href="#">Derek Slauson</a>
                </Nav.Link>
            </Container>
        </Navbar>
    )
}

export default Footer