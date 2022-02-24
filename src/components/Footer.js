import { Navbar, Container, Nav } from "react-bootstrap"

const Footer = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Blog.it</Navbar.Brand>
                <Container>
                    {/* align right? */}
                    Made by <a href="https://www.linkedin.com/in/nik-poliarco-3aaa181a3/" target="_blank">Albert Nikolai Poliarco</a>, <a href="https://www.linkedin.com/in/chandler-blaschka-532547b2/" target="_blank">Chandler Blaschka</a>, and <a href="#">Derek Slauson</a>
                </Container>
            </Container>
        </Navbar>
    )
}

export default Footer