import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Card, CardContent } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const academicStages = [
  {
    label: 'Foundation Stage',
    age: 'Age 3–8 | LKG to Class 2',
    details: [
      { title: 'Pedagogy', content: 'Multisensory Instruction (MI) methodology.' },
      { title: 'Core Systems', content: 'TSSLT Sensory Method (sensory skill building), Socio-Dramatic Method (roleplay), Image-Creative Method (puppet shows), and "Listen, Act & React" motor skill exercises.' },
    ]
  },
  {
    label: 'Preparatory Stage',
    age: 'Age 8–11 | Classes 3–5',
    details: [
      { title: 'Curriculum', content: 'NEP 2020-aligned experiential learning.' },
      { title: 'Key Subjects', content: 'Mathematics, English, Hindi, Environmental Studies (EVS), Computer Science, and General Knowledge.' },
      { title: 'Feature', content: 'Built-in moral development and life skills sessions.' },
    ]
  },
  {
    label: 'Middle Stage',
    age: 'Age 11–14 | Classes 6–8',
    details: [
      { title: 'Key Subjects', content: 'English, Hindi, Mathematics, Science, Social Studies.' },
      { title: 'Languages', content: 'Third language options including Sanskrit or French.' },
      { title: 'Clubs', content: 'Science Club, Literary Club, Art, Music, and Dance.' },
    ]
  },
  {
    label: 'Senior Secondary Stage',
    age: 'Age 14–18 | Classes 9–12',
    details: [
      { title: 'Classes 9 & 10', content: 'Comprehensive assessment prep aligning with standard board protocols.' },
      { title: 'Classes 11 & 12 Streams', content: 'Science (Medical / Non-Medical), Commerce, Humanities.' },
      { title: 'Focus', content: 'Conceptual depth, digital education, and personality development.' },
    ]
  }
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`academic-tabpanel-${index}`}
      aria-labelledby={`academic-tab-${index}`}
      {...other}
    >
      <AnimatePresence mode="wait">
        {value === index && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Box style={styles.tabContent}>
              {children}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const Academics: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box style={styles.root}>
      <Container maxWidth="lg">
        <Typography variant="h2" style={styles.pageTitle} gutterBottom>
          Academic Structure
        </Typography>
        <Typography variant="h6" style={styles.pageDesc}>
          Our curriculum is thoughtfully designed and aligned with NEP 2020 standards to ensure comprehensive development across all learning stages.
        </Typography>

        <Box style={styles.tabsWrapper}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            variant="scrollable"
            scrollButtons="auto"
            aria-label="academic stages tabs"
          >
            {academicStages.map((stage, index) => (
              <Tab 
                key={index} 
                label={stage.label} 
                style={styles.tabLabel} 
              />
            ))}
          </Tabs>
        </Box>

        {academicStages.map((stage, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
            <Card style={styles.stageCard}>
              <CardContent>
                <Typography variant="h4" gutterBottom style={styles.stageTitle}>
                  {stage.label}
                </Typography>
                <Typography variant="subtitle1" style={styles.stageAge}>
                  {stage.age}
                </Typography>
                
                <Box style={styles.detailsGrid}>
                  {stage.details.map((detail, idx) => (
                    <Box key={idx} style={styles.detailBox}>
                      <Typography variant="h6" style={styles.detailTitle} gutterBottom>
                        {detail.title}
                      </Typography>
                      <Typography variant="body1">
                        {detail.content}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </CustomTabPanel>
        ))}

      </Container>
    </Box>
  );
};

const styles: Record<string, React.CSSProperties> = {
  root: {
    padding: '96px 0',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
  },
  pageTitle: {
    textAlign: 'center',
    color: '#1a237e',
  },
  pageDesc: {
    textAlign: 'center',
    marginBottom: '64px',
    maxWidth: '800px',
    margin: '0 auto 64px auto',
    color: '#475569',
  },
  tabsWrapper: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    marginBottom: '32px',
  },
  tabLabel: {
    fontWeight: 'bold',
    fontSize: '1rem',
    textTransform: 'none',
  },
  tabContent: {
    padding: '32px 0',
  },
  stageCard: {
    padding: '32px',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  },
  stageTitle: {
    color: '#ffb300',
  },
  stageAge: {
    marginBottom: '32px',
    fontWeight: 'bold',
    color: '#475569',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  },
  detailBox: {
    padding: '24px',
    backgroundColor: '#e8eaf6',
    borderRadius: '8px',
    height: '100%',
  },
  detailTitle: {
    color: '#1a237e',
  }
};
