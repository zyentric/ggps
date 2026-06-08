import React from 'react';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { BookOpen, Map, Bus, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Box style={styles.root}>
      <Box style={styles.container}>
        {/* Header */}
        <Box style={styles.header}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="h2" style={styles.primaryText} gutterBottom>
              About Us
            </Typography>
            <Typography variant="h6" style={styles.headerDesc}>
              Discover the mission, vision, and the driving force behind Gyan Ganga Public School.
            </Typography>
          </motion.div>
        </Box>

        <Box style={styles.gridContainer}>
          {/* Overview & Mission */}
          <Box style={styles.overviewSection}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Typography variant="h4" gutterBottom style={styles.primaryText}>
                Overview & Mission
              </Typography>
              <Typography variant="body1" style={styles.bodyText}>
                Founded in 2015, Gyan Ganga Public School has been a beacon of knowledge in Shakteshgarh, Mirzapur. 
                We provide a comprehensive educational experience from LKG to Class 12, aligned with the National Education Policy (NEP) 2020.
              </Typography>
              <Typography variant="body1" style={styles.bodyText}>
                Our mission is to foster a safe, engaging, and dynamic learning environment where every child can excel academically while developing strong moral character and life skills. We emphasize conceptual depth, digital education, and holistic personality development.
              </Typography>
            </motion.div>
          </Box>

          {/* Principal's Message */}
          <Box>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card style={styles.principalCard}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Principal's Message
                  </Typography>
                  <Divider style={styles.divider} />
                  <Typography variant="body2" style={styles.quoteText}>
                    "Education is not just about academic excellence; it's about building character and preparing our youth for the challenges of tomorrow. At GGPS, we are committed to nurturing the unique potential of every student through innovative teaching and strong core values."
                  </Typography>
                  <Typography variant="subtitle1" style={styles.principalName}>
                    - Mr. Rishikesh Singh
                  </Typography>
                  <Typography variant="caption" style={styles.principalTitle}>
                    Principal, Gyan Ganga Public School
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Box>

        {/* Infrastructure */}
        <Box style={styles.infrastructureSection}>
          <Typography variant="h4" style={styles.sectionTitle} gutterBottom>
            Our Infrastructure & Facilities
          </Typography>
          <Typography variant="body1" style={styles.sectionDesc}>
            State-of-the-art facilities designed to provide an optimal learning environment.
          </Typography>
          
          <Box style={styles.facilitiesGrid}>
            {[
              { title: 'Smart Classrooms', icon: <BookOpen size={32} />, desc: 'Well-ventilated spaces integrated with smartboards for interactive learning.' },
              { title: 'Modern Labs', icon: <ShieldCheck size={32} />, desc: 'Fully equipped Science and Computer Labs for hands-on practical experience.' },
              { title: 'Resource Center', icon: <Map size={32} />, desc: 'A rich library with an extensive catalog of references, fiction, and multimedia.' },
              { title: 'Safe Transport', icon: <Bus size={32} />, desc: 'Safety-monitored school bus routing across local zones managed via advance notice system.' },
            ].map((facility, index) => (
              <Box key={index}>
                <motion.div whileHover={{ y: -10 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                  <Card style={styles.facilityCard}>
                    <Box style={styles.iconContainer}>
                      {facility.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>{facility.title}</Typography>
                    <Typography variant="body2" style={styles.secondaryText}>{facility.desc}</Typography>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles: Record<string, React.CSSProperties> = {
  root: {
    padding: '96px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  primaryText: {
    color: '#1a237e',
  },
  secondaryText: {
    color: '#475569',
  },
  headerDesc: {
    color: '#475569',
    maxWidth: '800px',
    margin: '0 auto',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '64px',
    alignItems: 'flex-start',
  },
  overviewSection: {
    flex: 1,
  },
  bodyText: {
    lineHeight: 1.8,
    marginBottom: '24px',
    color: '#1e293b',
  },
  principalCard: {
    backgroundColor: '#1a237e',
    color: '#ffffff',
    padding: '16px',
    borderRadius: '12px',
  },
  divider: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: '16px',
  },
  quoteText: {
    fontStyle: 'italic',
    lineHeight: 1.8,
    marginBottom: '16px',
  },
  principalName: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  principalTitle: {
    display: 'block',
    textAlign: 'right',
    opacity: 0.8,
  },
  infrastructureSection: {
    marginTop: '96px',
  },
  sectionTitle: {
    textAlign: 'center',
    color: '#1a237e',
  },
  sectionDesc: {
    textAlign: 'center',
    color: '#475569',
    marginBottom: '48px',
  },
  facilitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px',
  },
  facilityCard: {
    height: '100%',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '12px',
  },
  iconContainer: {
    padding: '16px',
    borderRadius: '50%',
    backgroundColor: '#ffe54c',
    color: '#000000',
    marginBottom: '16px',
  }
};
