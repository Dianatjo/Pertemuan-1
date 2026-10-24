'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About() {
  return (
    <Container className="mt-5 pt-4">
      <Row className="justify-content-center">
        <Col md={8} lg={7}>
          <Card className="shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Body className="text-center p-5">
              <h2 className="fw-bold mb-4" style={{ color: '#8a2be2' }}>Tentang Kami</h2>
              
              <p className="lead mb-4" style={{ color: '#555' }}>
                Mengubah setiap visi menjadi realitas digital yang memukau.
              </p>
              
              <p className="text-secondary" style={{ lineHeight: '1.8' }}>
                Berawal dari mimpi 7 individu yang penuh semangat, Magic Shop Studio hadir sebagai ruang kreatif tanpa batas. Tempat di mana estetika desain berpadu harmonis dengan inovasi teknologi untuk melahirkan pengalaman digital kelas satu.
              </p>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}