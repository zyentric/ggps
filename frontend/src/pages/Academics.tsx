import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Card, CardContent } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const academicStages = [
  {
    label: 'Foundation',
    fullLabel: 'Foundation Stage',
    age: 'Age 3–8 | LKG to Class 2',
    color: '#1a237e',
    details: [
      { title: 'Pedagogy', content: 'Multisensory Instruction (MI) methodology for early learners.' },
      { title: 'Core Methods', content: 'TSSLT Sensory Method, Socio-Dramatic Method (roleplay), Image-Creative Method (puppet shows), and "Listen, Act & React" motor skill exercises.' },
    ]
  },
  {
    label: 'Preparatory',
    fullLabel: 'Preparatory Stage',
    age: 'Age 8–11 | Classes 3–5',
    color: '#283593',
    details: [
      { title: 'Curriculum', content: 'NEP 2020-aligned experiential learning framework.' },
      { title: 'Key Subjects', content: 'Mathematics, English, Hindi, EVS, Computer Science, and General Knowledge.' },
      { title: 'Feature', content: 'Built-in moral development and life skills sessions.' },
    ]
  },
  {
    label: 'Middle',
    fullLabel: 'Middle Stage',
    age: 'Age 11–14 | Classes 6–8',
    color: '#3949ab',
    details: [
      { title: 'Key Subjects', content: 'English, Hindi, Mathematics, Science, Social Studies.' },
      { title: 'Languages', content: 'Third language options: Sanskrit or French.' },
      { title: 'Clubs', content: 'Science Club, Literary Club, Art, Music, and Dance.' },
    ]
  },
  {
    label: 'Senior Secondary',
    fullLabel: 'Senior Secondary Stage',
    age: 'Age 14–18 | Classes 9–12',
    color: '#1565c0',
    details: [
      { title: 'Classes 9 & 10', content: 'Comprehensive assessment prep aligned with standard board protocols.' },
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

function CustomTabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`academic-tabpanel-${index}`} aria-labelledby={`academic-tab-${index}`}>
      <AnimatePresence mode="wait">
        {value === index && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <Box sx={{ pt: 4 }}>{children}</Box>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const Academics: React.FC = () => {
  const [value, setValue] = useState(0);
  // const stage = academicStages[value];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ display: 'block', textAlign: 'center', color: '#ffb300', fontWeight: 700, letterSpacing: '0.1em', mb: 1 }}>
          Our Curriculum
        </Typography>
        <Typography variant="h2" sx={{ textAlign: 'center', color: '#1a237e', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2 }}>
          Academic Structure
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, maxWidth: '800px', mx: 'auto', color: '#475569', fontWeight: 400, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
          Our curriculum is thoughtfully designed and aligned with NEP 2020 standards to ensure comprehensive development across all learning stages.
        </Typography>

        {/* Tabs */}
        <Box sx={{ borderBottom: '1px solid rgba(0,0,0,0.12)', mb: 2 }}>
          <Tabs
            value={value}
            onChange={(_e, v) => setValue(v)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="academic stages tabs"
            sx={{
              '& .MuiTab-root': { fontWeight: 600, textTransform: 'none', fontSize: { xs: '0.82rem', md: '0.95rem' }, minWidth: { xs: 80, sm: 120 } },
              '& .Mui-selected': { color: '#1a237e !important' },
              '& .MuiTabs-indicator': { backgroundColor: '#1a237e' },
            }}
          >
            {academicStages.map((s, i) => (
              <Tab key={i} label={s.label} id={`academic-tab-${i}`} aria-controls={`academic-tabpanel-${i}`} />
            ))}
          </Tabs>
        </Box>

        {academicStages.map((s, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
            <Card sx={{ borderRadius: '20px', boxShadow: '0 4px 30px rgba(0,0,0,0.08)', overflow: 'visible' }}>
              <Box sx={{ background: `linear-gradient(135deg, ${s.color} 0%, #534bae 100%)`, borderRadius: '20px 20px 0 0', p: { xs: 3, md: 4 } }}>
                <Typography variant="overline" sx={{ color: '#ffb300', fontWeight: 700, letterSpacing: '0.1em' }}>
                  {s.age}
                </Typography>
                <Typography variant="h4" sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.4rem', md: '2rem' }, mt: 0.5 }}>
                  {s.fullLabel}
                </Typography>
              </Box>
              <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(auto-fit, minmax(280px, 1fr))' }, gap: 3 }}>
                  {s.details.map((detail, idx) => (
                    <Box key={idx} sx={{ p: 3, backgroundColor: '#e8eaf6', borderRadius: '12px', borderLeft: '4px solid #1a237e' }}>
                      <Typography variant="h6" sx={{ color: '#1a237e', fontWeight: 700, mb: 1, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                        {detail.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#1e293b', lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '0.95rem' } }}>
                        {detail.content}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </CustomTabPanel>
        ))}

        {/* Stage overview pills */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 6 }}>
          {academicStages.map((s, i) => (
            <Box
              key={i}
              onClick={() => setValue(i)}
              sx={{
                px: 3, py: 1.2, borderRadius: '100px', cursor: 'pointer',
                background: i === value ? '#1a237e' : 'rgba(26,35,126,0.08)',
                color: i === value ? '#fff' : '#1a237e',
                fontWeight: 600, fontSize: '0.85rem',
                transition: 'all 0.2s ease',
                '&:hover': { background: i === value ? '#000051' : 'rgba(26,35,126,0.15)' },
              }}
            >
              {s.label}
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
};
