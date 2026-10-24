'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Navigation() {
  const pathname = usePathname();

  return (
    // Background putih biar bersih dan rapi
    <Navbar bg="white" variant="light" expand="lg" className="shadow-sm">
      <Container>
        {/* Nama web dengan warna ungu (Bora) dan emoji bintang ✨ */}
        <Navbar.Brand as={Link} href="/" className="fw-bold" style={{ color: '#8a2be2' }}>
          ✨ Magic Shop Studio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="/" active={pathname === '/'}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about" active={pathname === '/about'}>
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/team" active={pathname.startsWith('/team')}>
              Team
            </Nav.Link>
            <Nav.Link as={Link} href="/contact" active={pathname === '/contact'}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}