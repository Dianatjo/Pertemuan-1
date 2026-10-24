'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Home() {
  return (
    // Membungkus layar dengan gradasi ungu super halus biar nggak monoton
    <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(to bottom, #ffffff, #f8f0ff)' }}>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            
            {/* Tempat untuk memunculkan Animasi/Logo di tengah atas */}
            {/* Pastikan kamu memasukkan file gambar ke folder public dengan nama 'magic-animasi.gif' atau ubah nama di bawah sesuai nama filemu */}
            <img 
              src="/logo.jpeg" 
              alt="Magic Shop Logo" 
              style={{ width: '180px', marginBottom: '25px' }} 
            />
            
            <h1 className="display-4 fw-bold" style={{ color: '#8a2be2', letterSpacing: '-1px' }}>
              Welcome to Magic Shop Studio
            </h1>
            
            <p className="lead mt-4 text-secondary" style={{ lineHeight: '1.8' }}>
              Membawa sentuhan magis ke dalam setiap karya digitalmu ✨ Mulai dari desain visual yang memukau, pembuatan website, hingga strategi marketing, kami siap menyulap idemu menjadi kenyataan 🌟
            </p>
            
            <Link href="/team" passHref>
              {}
              <Button 
                variant="outline-primary" 
                className="mt-4 px-5 py-3 fw-bold shadow-sm" 
                style={{ borderColor: '#8a2be2', color: '#8a2be2', borderRadius: '50px' }}
              >
                Kenalan Sama Tim Kami
              </Button>
            </Link>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}