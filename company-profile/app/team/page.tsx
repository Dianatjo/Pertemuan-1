'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function Team() {
  const teamMembers = [
    { id: 'namjoon', name: 'Kim Namjoon', role: 'Art Director' },
    { id: 'seokjin', name: 'Kim Seokjin', role: 'Production Manager' },
    { id: 'yoongi', name: 'Min Yoongi', role: 'Scriptwriter' },
    { id: 'hoseok', name: 'Jung Hoseok', role: 'Marketing' },
    { id: 'jimin', name: 'Park Jimin', role: 'Colorist' },
    { id: 'taehyung', name: 'Kim Taehyung', role: 'Visual Director' },
    { id: 'jungkook', name: 'Jeon Jungkook', role: 'Sales Executive' }
  ];

  return (
    <Container className="mt-5 pt-4 text-center">
      <h2 className="fw-bold mb-4" style={{ color: '#8a2be2' }}>Our Team</h2>
      <Row className="justify-content-center">
        {/* Mapping data array ke dalam kolom Bootstrap */}
        {teamMembers.map((member) => (
          <Col md={4} sm={6} key={member.id} className="mb-4">
            <Card className="h-100 shadow-sm" style={{ borderRadius: '12px' }}>
              <Card.Body className="d-flex flex-column justify-content-center py-4">
                <Card.Title className="fw-bold">{member.name}</Card.Title>
                <Card.Text className="text-muted mb-4">{member.role}</Card.Text>
                
                {/* Tombol yang mengarah ke Dynamic Route */}
                <Link href={`/team/${member.id}`} className="btn btn-outline-primary btn-sm mt-auto" style={{ borderColor: '#8a2be2', color: '#8a2be2' }}>
                  Lihat Profil
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}