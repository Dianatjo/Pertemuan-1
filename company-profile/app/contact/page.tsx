'use client';

import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container className="mt-5 pt-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{ color: '#8a2be2' }}>Got ideas? Say hi!</h2>
            <p className="text-muted">Kirimkan pesan ajaibmu, dan tim kami akan segera merespons.</p>
          </div>
          
          <Card className="shadow-sm border-0" style={{ borderRadius: '15px' }}>
            <Card.Body className="p-4 p-md-5">
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="text" placeholder="Your Name" className="py-2" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" placeholder="Email Address" className="py-2" />
                </Form.Group>
                
                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="button" 
                  className="w-100 py-2 fw-bold" 
                  style={{ backgroundColor: '#8a2be2', borderColor: '#8a2be2' }}
                  onClick={() => alert("Yeay! Pesan ajaibmu berhasil terkirim ke Magic Shop Studio! ✨")}
                >
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}