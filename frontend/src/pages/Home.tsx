import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { Users, GraduationCap, Calendar, ShieldCheck, MonitorPlay, Activity, Heart } from 'lucide-react';

const AnimatedNumber = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start > end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.ceil(start)); }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span>{count}</span>;
};

const features = [
  { icon: <GraduationCap size={32} />, title: 'Qualified Teachers', desc: 'Experienced faculty ensuring quality education and personal attention to every student.' },
  { icon: <MonitorPlay size={32} />, title: 'Digital Learning', desc: 'Smartboard classrooms and modern labs for interactive, engaging learning experiences.' },
  { icon: <Activity size={32} />, title: 'Sports Activities', desc: 'Dedicated sports grounds and activities promoting physical health and teamwork.' },
  { icon: <Heart size={32} />, title: 'Moral Education', desc: 'Character building, life skills, and strong moral values at the core of our curriculum.' },
];

const galleryItems = ['School Activities', 'Annual Function', 'Classroom Learning', 'Sports Events'];

export const Home: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a237e 0%, #283593 60%, #3949ab 100%)',
          color: '#fff',
          pt: { xs: '80px', md: '120px' },
          pb: { xs: '60px', md: '100px' },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-100px', right: '-100px',
            width: 400, height: 400,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-80px', left: '-80px',
            width: 300, height: 300,
            borderRadius: '50%',
            background: 'rgba(255,179,0,0.08)',
          },
        }}
      >
        <Box sx={{ maxWidth: '860px', mx: 'auto', px: { xs: 2, sm: 4 }, position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Box sx={{
              display: 'inline-block',
              background: 'rgba(255,179,0,0.15)',
              border: '1px solid rgba(255,179,0,0.4)',
              color: '#ffb300',
              px: 2, py: 0.6,
              borderRadius: '100px',
              fontSize: '0.85rem',
              fontWeight: 600,
              mb: 3,
              letterSpacing: '0.05em',
            }}>
              Admissions Open 2026–27
            </Box>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' },
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              {siteConfig.name}
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, opacity: 0.9, fontWeight: 400, fontSize: { xs: '1.05rem', md: '1.3rem' } }}>
              {siteConfig.tagline}
            </Typography>
            <Typography variant="body1" sx={{ mb: 5, opacity: 0.8, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, maxWidth: 700, mx: 'auto' }}>
              {siteConfig.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={Link}
                to="/admissions"
                sx={{ px: 4, py: 1.5, borderRadius: '10px', fontWeight: 700, textTransform: 'none', fontSize: '1rem' }}
              >
                Apply for Admission
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                component={Link}
                to="/about"
                sx={{ px: 4, py: 1.5, borderRadius: '10px', fontWeight: 600, textTransform: 'none', fontSize: '1rem', borderColor: 'rgba(255,255,255,0.5)' }}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Stats + About Section */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 4 }, py: { xs: 6, md: 10 } }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
          {/* About Text */}
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Typography variant="overline" sx={{ color: '#ffb300', fontWeight: 700, letterSpacing: '0.1em' }}>
                Who We Are
              </Typography>
              <Typography variant="h3" gutterBottom sx={{ color: '#1a237e', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, mt: 0.5 }}>
                About Our School
              </Typography>
              <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.85, mb: 3 }}>
                Gyan Ganga Public School is dedicated to nurturing young minds with a blend of traditional values and modern pedagogy.
                We provide a safe, engaging, and dynamic learning environment where every student is encouraged to reach their full potential.
              </Typography>
              <Button
                variant="text"
                color="primary"
                component={Link}
                to="/about"
                sx={{ textTransform: 'none', fontWeight: 700, fontSize: '1rem', p: 0 }}
              >
                Read More About Us →
              </Button>
            </motion.div>
          </Box>

          {/* Stats Grid */}
          <Box sx={{ flex: '1 1 300px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {[
              { icon: <Users size={32} />, value: <><AnimatedNumber end={siteConfig.stats.students} />+</>, label: 'Students' },
              { icon: <GraduationCap size={32} />, value: <><AnimatedNumber end={siteConfig.stats.teachers} />+</>, label: 'Teachers' },
              { icon: <Calendar size={32} />, value: siteConfig.established, label: 'Est. Year' },
              { icon: <ShieldCheck size={32} />, value: <><AnimatedNumber end={siteConfig.stats.commitment} />%</>, label: 'Commitment' },
            ].map((s, i) => (
              <Card
                key={i}
                sx={{
                  textAlign: 'center',
                  p: { xs: 2, md: 3 },
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(26,35,126,0.08)',
                  border: '1px solid rgba(26,35,126,0.06)',
                  transition: 'transform 0.2s ease',
                  '&:hover': { transform: 'translateY(-4px)' },
                }}
              >
                <Box sx={{ color: '#1a237e', mb: 1, display: 'flex', justifyContent: 'center' }}>{s.icon}</Box>
                <Typography variant="h4" sx={{ color: '#1a237e', fontWeight: 800, fontSize: { xs: '1.6rem', md: '2rem' } }}>{s.value}</Typography>
                <Typography variant="subtitle2" sx={{ color: '#475569', mt: 0.5 }}>{s.label}</Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ backgroundColor: '#f5f7fa', py: { xs: 6, md: 10 } }}>
        <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 4 } }}>
          <Typography variant="overline" sx={{ display: 'block', textAlign: 'center', color: '#ffb300', fontWeight: 700, letterSpacing: '0.1em', mb: 1 }}>
            Our Edge
          </Typography>
          <Typography variant="h3" sx={{ textAlign: 'center', color: '#1a237e', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 2 }}>
            Why Choose GGPS?
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: '#475569', mb: 6, maxWidth: '700px', mx: 'auto', lineHeight: 1.8 }}>
            We focus on holistic development, combining excellent academics with strong moral values, modern technology, and physical education.
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' },
                  }}
                >
                  <Box sx={{ p: 2, borderRadius: '50%', backgroundColor: '#534bae', color: '#fff', mb: 2, display: 'flex' }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>{feature.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.75 }}>{feature.desc}</Typography>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Gallery Section */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 4 }, py: { xs: 6, md: 10 } }}>
        <Typography variant="h3" sx={{ textAlign: 'center', color: '#1a237e', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 1 }}>
          Life at GGPS
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', color: '#475569', mb: 5, lineHeight: 1.8 }}>
          A glimpse into our vibrant school community.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
          {galleryItems.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Card sx={{ overflow: 'hidden', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                <Box
                  sx={{
                    height: { xs: 180, md: 200 },
                    background: `linear-gradient(135deg, #1a237e${20 + i * 15}dd, #534bae)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GraduationCap size={40} color="rgba(255,255,255,0.4)" />
                </Box>
                <Box sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '0.95rem' }}>{item}</Typography>
                </Box>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* CTA Banner */}
      <Box sx={{ background: 'linear-gradient(135deg, #ffb300 0%, #ff8f00 100%)', py: { xs: 5, md: 7 }, px: { xs: 2, sm: 4 }, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a237e', mb: 1.5, fontSize: { xs: '1.5rem', md: '2.2rem' } }}>
          Ready to Join the GGPS Family?
        </Typography>
        <Typography variant="body1" sx={{ color: '#1a237e', opacity: 0.85, mb: 3.5, maxWidth: 600, mx: 'auto', lineHeight: 1.8 }}>
          Admissions are open for session 2026–27. Limited seats available. Apply early to secure your child's future.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/admissions"
          size="large"
          sx={{ backgroundColor: '#1a237e', color: '#fff', px: 5, py: 1.5, borderRadius: '10px', fontWeight: 700, textTransform: 'none', fontSize: '1rem', '&:hover': { backgroundColor: '#000051' } }}
        >
          Apply Now
        </Button>
      </Box>

    </Box>
  );
};
