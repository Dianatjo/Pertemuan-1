'use client';

import { Container, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { use } from 'react';

export default function TeamDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  const teamMembers = [
    { id: 'namjoon', name: 'Kim Namjoon', role: 'Art Director', image: '/namjoon.jpeg', bio: 'Bertanggung jawab atas visi visual dan desain antarmuka.', motto: '"Teamwork makes the dream work."', email: 'namjoon@magicshop.com' },
    { id: 'seokjin', name: 'Kim Seokjin', role: 'Production Manager', image: '/seokjin.jpeg', bio: 'Memastikan semua proyek berjalan lancar dan tepat waktu.', motto: '"If it\'s not fun, it\'s not worth doing."', email: 'seokjin@magicshop.com' },
    { id: 'yoongi', name: 'Min Yoongi', role: 'Scriptwriter', image: '/yoongi.jpeg', imgPos: 'top', bio: 'Merancang alur cerita dan konsep untuk kebutuhan klien.', motto: '"Stay innocent, be naive. But dream big."', email: 'yoongi@magicshop.com' },
    { id: 'hoseok', name: 'Jung Hoseok', role: 'Marketing', image: '/hoseok.jpeg', bio: 'Mengatur strategi pemasaran digital dan sosial media.', motto: '"I\'m your hope, you\'re my hope."', email: 'hoseok@magicshop.com' },
    { id: 'jimin', name: 'Park Jimin', role: 'Colorist', image: '/jimin.jpeg', bio: 'Memberikan sentuhan warna yang magis pada setiap desain.', motto: '"Never give up on a dream that you\'ve been chasing."', email: 'jimin@magicshop.com' },
    { id: 'taehyung', name: 'Kim Taehyung', role: 'Visual Director', image: '/taehyung.jpeg', bio: 'Mengarahkan estetika visual agar selalu memukau dan kekinian.', motto: '"I will trust and love you for a long time."', email: 'taehyung@magicshop.com' },
    { id: 'jungkook', name: 'Jeon Jungkook', role: 'Sales Executive', image: '/jungkook.jpeg', bio: 'Berkomunikasi dengan klien dan menjaga hubungan baik.', motto: '"Rather be dead than cool."', email: 'jungkook@magicshop.com' }
  ];

  const member = teamMembers.find((m) => m.id === resolvedParams.id);

  if (!member) {
    return (
      <Container className="mt-5 pt-5 text-center">
        <h3>Member tidak ditemukan!</h3>
        <Link href="/team"><Button className="mt-3">Kembali</Button></Link>
      </Container>
    );
  }

  return (
    <Container className="mt-5 pt-4 d-flex justify-content-center">
      <Card className="shadow-sm border-0 text-center p-4" style={{ maxWidth: '600px', borderRadius: '15px' }}>
        <Card.Body>
          <img 
            src={member.image} 
            alt={member.name} 
            className="rounded-circle mb-3 shadow-sm"
            style={{ 
              width: '120px', 
              height: '120px', 
              objectFit: 'cover', 
              objectPosition: member.imgPos || 'center',
              border: '4px solid #8a2be2' 
            }}
          />
          <h3 className="fw-bold" style={{ color: '#8a2be2' }}>{member.name}</h3>
          <h6 className="text-muted mb-4">{member.role}</h6>
          
          <p className="text-secondary px-md-4 mb-3">
            {member.bio}
          </p>

          {/* Bagian Motto */}
          <p className="fst-italic text-muted mb-2" style={{ fontSize: '0.9rem' }}>
            {member.motto}
          </p>

          {/* Bagian Email */}
          <p className="fw-semibold mb-4" style={{ fontSize: '0.9rem', color: '#8a2be2' }}>
            ✉️ {member.email}
          </p>
          
          <Link href="/team" passHref>
            <Button variant="outline-secondary">Kembali ke Daftar Tim</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}