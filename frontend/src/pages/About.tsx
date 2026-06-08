import React from 'react';
import { Box, Typography, Card, CardContent, Divider, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { BookOpen, Map, Bus, ShieldCheck } from 'lucide-react';

const facilities = [
  { title: 'Smart Classrooms', icon: <BookOpen size={32} />, desc: 'Well-ventilated spaces integrated with smartboards for interactive, immersive learning.' },
  { title: 'Modern Labs', icon: <ShieldCheck size={32} />, desc: 'Fully equipped Science and Computer Labs for hands-on practical experience.' },
  { title: 'Resource Center', icon: <Map size={32} />, desc: 'A rich library with an extensive catalog of references, fiction, and multimedia.' },
  { title: 'Safe Transport', icon: <Bus size={32} />, desc: 'Safety-monitored school bus routing across local zones with advance notice system.' },
];

export const About: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="overline" sx={{ color: '#ffb300', fontWeight: 700, letterSpacing: '0.1em' }}>
              Our Story
            </Typography>
            <Typography variant="h2" sx={{ color: '#1a237e', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, mt: 0.5, mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="h6" sx={{ color: '#475569', maxWidth: '700px', mx: 'auto', lineHeight: 1.8, fontWeight: 400, fontSize: { xs: '1rem', md: '1.1rem' } }}>
              Discover the mission, vision, and the driving force behind Gyan Ganga Public School.
            </Typography>
          </motion.div>
        </Box>

        {/* Overview + Principal */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 4, md: 6 }, alignItems: 'flex-start', mb: { xs: 6, md: 10 } }}>
          {/* Overview */}
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Typography variant="h4" gutterBottom sx={{ color: '#1a237e', fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Overview & Mission
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.85, mb: 3, color: '#1e293b', fontSize: { xs: '0.95rem', md: '1rem' } }}>
                Founded in 2015, Gyan Ganga Public School has been a beacon of knowledge in Shakteshgarh, Mirzapur.
                We provide a comprehensive educational experience from LKG to Class 12, aligned with the National Education Policy (NEP) 2020.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.85, mb: 3, color: '#1e293b', fontSize: { xs: '0.95rem', md: '1rem' } }}>
                Our mission is to foster a safe, engaging, and dynamic learning environment where every child can excel academically while developing
                strong moral character and life skills. We emphasize conceptual depth, digital education, and holistic personality development.
              </Typography>

              {/* Key facts */}
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, mt: 3 }}>
                {[
                  { label: 'Established', value: '2015' },
                  { label: 'Classes', value: 'LKG – XII' },
                  { label: 'Medium', value: 'Hindi & English' },
                  { label: 'Location', value: 'Mirzapur, U.P.' },
                ].map((f) => (
                  <Box key={f.label} sx={{ p: 2, backgroundColor: '#f0f3ff', borderRadius: '12px', borderLeft: '3px solid #1a237e' }}>
                    <Typography variant="caption" sx={{ color: '#475569', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                      {f.label}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#1a237e', fontWeight: 700, fontSize: '1rem', mt: 0.2 }}>{f.value}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Principal's Message */}
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card sx={{ backgroundColor: '#1a237e', color: '#fff', borderRadius: '20px', p: 1, boxShadow: '0 20px 60px rgba(26,35,126,0.25)' }}>
                <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>Principal's Message</Typography>
                  <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.2)', mb: 3 }} />
                  <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.85, mb: 3, opacity: 0.92, fontSize: { xs: '0.9rem', md: '0.95rem' } }}>
                    "Education is not just about academic excellence; it's about building character and preparing our youth for the challenges of tomorrow.
                    At GGPS, we are committed to nurturing the unique potential of every student through innovative teaching and strong core values."
                  </Typography>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>— Mr. Rishikesh Singh</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.75 }}>Principal, Gyan Ganga Public School</Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Box>

        {/* Infrastructure */}
        <Box>
          <Typography variant="overline" sx={{ display: 'block', textAlign: 'center', color: '#ffb300', fontWeight: 700, letterSpacing: '0.1em', mb: 1 }}>
            Facilities
          </Typography>
          <Typography variant="h4" sx={{ textAlign: 'center', color: '#1a237e', fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' }, mb: 1.5 }}>
            Our Infrastructure & Facilities
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: '#475569', mb: { xs: 4, md: 6 }, maxWidth: '600px', mx: 'auto', lineHeight: 1.8 }}>
            State-of-the-art facilities designed to provide an optimal learning environment.
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{
                  height: '100%', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center',
                  textAlign: 'center', borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': { boxShadow: '0 12px 40px rgba(0,0,0,0.12)' },
                }}>
                  <Box sx={{ p: 2, borderRadius: '50%', backgroundColor: '#ffe54c', mb: 2, display: 'flex' }}>
                    {facility.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>{facility.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.75 }}>{facility.desc}</Typography>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
};
