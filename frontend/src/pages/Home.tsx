import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { Users, GraduationCap, Calendar, ShieldCheck, MonitorPlay, Activity, Heart } from 'lucide-react';

const AnimatedNumber = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

export const Home: React.FC = () => {
  return (
    <Box style={styles.root}>
      {/* Hero Section */}
      <Box style={styles.heroSection}>
        <Box style={styles.heroContainer}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h2" component="h1" gutterBottom style={styles.heroTitle}>
              {siteConfig.name}
            </Typography>
            <Typography variant="h5" style={styles.heroTagline}>
              {siteConfig.tagline}
            </Typography>
            <Typography variant="body1" style={styles.heroDesc}>
              {siteConfig.description}
            </Typography>
            <Box style={styles.heroButtons}>
              <Button variant="contained" color="secondary" size="large" component={Link} to="/admissions" style={styles.button}>
                Admissions Open 2026-27
              </Button>
              <Button variant="outlined" color="inherit" size="large" component={Link} to="/contact" style={styles.button}>
                Contact & Apply Now
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* About Section with Counters */}
      <Box style={styles.sectionContainer}>
        <Box style={styles.aboutGrid}>
          <Box style={styles.aboutText}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Typography variant="h3" gutterBottom style={styles.primaryText}>
                About Our School
              </Typography>
              <Typography variant="body1" style={styles.bodyText}>
                Gyan Ganga Public School is dedicated to nurturing young minds with a blend of traditional values and modern pedagogy. We provide a safe, engaging, and dynamic learning environment where every student is encouraged to reach their full potential.
              </Typography>
              <Button variant="text" color="primary" component={Link} to="/about" style={styles.readMoreBtn}>
                Read More About Us &rarr;
              </Button>
            </motion.div>
          </Box>
          <Box style={styles.statsGrid}>
            <Card style={styles.statCard}>
              <Users size={40} style={styles.statIcon} />
              <Typography variant="h3" style={styles.primaryText} gutterBottom>
                <AnimatedNumber end={siteConfig.stats.students} />+
              </Typography>
              <Typography variant="subtitle1" style={styles.secondaryText}>Students</Typography>
            </Card>
            <Card style={styles.statCard}>
              <GraduationCap size={40} style={styles.statIcon} />
              <Typography variant="h3" style={styles.primaryText} gutterBottom>
                <AnimatedNumber end={siteConfig.stats.teachers} />+
              </Typography>
              <Typography variant="subtitle1" style={styles.secondaryText}>Teachers</Typography>
            </Card>
            <Card style={styles.statCard}>
              <Calendar size={40} style={styles.statIcon} />
              <Typography variant="h3" style={styles.primaryText} gutterBottom>
                {siteConfig.established}
              </Typography>
              <Typography variant="subtitle1" style={styles.secondaryText}>Since</Typography>
            </Card>
            <Card style={styles.statCard}>
              <ShieldCheck size={40} style={styles.statIcon} />
              <Typography variant="h3" style={styles.primaryText} gutterBottom>
                <AnimatedNumber end={siteConfig.stats.commitment} />%
              </Typography>
              <Typography variant="subtitle1" style={styles.secondaryText}>Commitment</Typography>
            </Card>
          </Box>
        </Box>
      </Box>

      {/* Why Choose Us */}
      <Box style={styles.greySection}>
        <Box style={styles.container}>
          <Typography variant="h3" style={styles.sectionTitle} gutterBottom>
            Why Choose Us
          </Typography>
          <Typography variant="body1" style={styles.sectionDesc}>
            We focus on holistic development, combining excellent academics with strong moral values, modern technology, and physical education.
          </Typography>
          <Box style={styles.featuresGrid}>
            {[
              { icon: <GraduationCap size={32} />, title: 'Qualified Teachers', desc: 'Our experienced faculty ensures quality education and personal attention to every student.' },
              { icon: <MonitorPlay size={32} />, title: 'Digital Learning', desc: 'Smartboard-integrated classrooms and modern labs for interactive learning experiences.' },
              { icon: <Activity size={32} />, title: 'Sports Activities', desc: 'Dedicated sports grounds and activities to promote physical health and teamwork.' },
              { icon: <Heart size={32} />, title: 'Moral Education', desc: 'Focus on character building, life skills, and instilling strong moral values.' },
            ].map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                <Card style={styles.featureCard}>
                  <Box style={styles.iconContainer}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>{feature.title}</Typography>
                  <Typography variant="body2" style={styles.secondaryText}>{feature.desc}</Typography>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>
      
      {/* Gallery Section */}
      <Box style={styles.sectionContainer}>
        <Typography variant="h3" style={styles.sectionTitle} gutterBottom>
          Life at GGPS
        </Typography>
        <Box style={styles.galleryGrid}>
          {['School Activities', 'Annual Function', 'Classroom Learning', 'Sports Events'].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Card style={styles.galleryCard}>
                <Box style={styles.galleryImagePlaceholder}>
                  <Typography style={styles.secondaryText}>Image Placeholder: {item}</Typography>
                </Box>
                <CardContent>
                  <Typography variant="h6" style={styles.textCenter}>{item}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const styles: Record<string, React.CSSProperties> = {
  root: {
    width: '100%',
  },
  heroSection: {
    backgroundColor: '#1a237e',
    color: '#ffffff',
    padding: '120px 0',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 24px',
  },
  heroTitle: {
    fontWeight: 800,
  },
  heroTagline: {
    marginBottom: '32px',
    opacity: 0.9,
  },
  heroDesc: {
    marginBottom: '48px',
    opacity: 0.8,
  },
  heroButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    padding: '12px 32px',
  },
  sectionContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '96px 24px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '48px',
    alignItems: 'center',
  },
  aboutText: {
    // text container styles
  },
  primaryText: {
    color: '#1a237e',
  },
  secondaryText: {
    color: '#475569',
  },
  bodyText: {
    color: '#475569',
    fontSize: '1.1rem',
    lineHeight: 1.8,
    marginBottom: '32px',
  },
  readMoreBtn: {
    marginTop: '16px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  },
  statCard: {
    textAlign: 'center',
    padding: '24px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  },
  statIcon: {
    color: '#1a237e',
    marginBottom: '16px',
  },
  greySection: {
    backgroundColor: '#f5f7fa',
    padding: '96px 0',
  },
  sectionTitle: {
    textAlign: 'center',
    color: '#1a237e',
  },
  sectionDesc: {
    textAlign: 'center',
    color: '#475569',
    marginBottom: '64px',
    maxWidth: '800px',
    margin: '0 auto 64px auto',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px',
  },
  featureCard: {
    height: '100%',
    padding: '24px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '12px',
  },
  iconContainer: {
    padding: '16px',
    borderRadius: '50%',
    backgroundColor: '#534bae',
    color: '#ffffff',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginTop: '32px',
  },
  galleryCard: {
    overflow: 'hidden',
    borderRadius: '12px',
    padding: 0,
  },
  galleryImagePlaceholder: {
    height: '200px',
    backgroundColor: '#e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  }
};
