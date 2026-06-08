import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, TextField, Button, Alert, Stepper, Step, StepLabel, StepContent } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    label: 'Check Eligibility',
    description: 'Nursery to Class 9 & 11. Nursery admissions require a minimum age of 3 years verified by an official birth certificate. Entry into mid-stream classes (VI, IX, XI) depends on baseline aptitude tests and seat availability.',
  },
  {
    label: 'Procure the Application Form',
    description: "Parents must secure the official physical application form directly from the school's administrative office.",
  },
  {
    label: 'Document Compilation',
    description: 'Gather original and two sets of copies of: Transfer Certificate (TC), Report Card/Marksheet from last class, 4 Passport-size photographs, and a Category Certificate (if applicable).',
  },
  {
    label: 'Interaction & Review',
    description: 'Attend the candidate evaluation interaction. Final enrollment remains at the sole discretion of the Principal based on overall merit and seat allocation rules.',
  },
];

const schema = yup.object({
  parentName: yup.string().required('Parent name is required'),
  studentName: yup.string().required('Student name is required'),
  phone: yup.string().required('Phone number is required').matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  grade: yup.string().required('Grade applying for is required'),
}).required();

type FormData = yup.InferType<typeof schema>;

export const Admissions: React.FC = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
    defaultValues: { parentName: '', studentName: '', phone: '', email: '', grade: '' }
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ display: 'block', textAlign: 'center', color: '#ffb300', fontWeight: 700, letterSpacing: '0.1em', mb: 1 }}>
          Join Our Family
        </Typography>
        <Typography variant="h2" sx={{ textAlign: 'center', color: '#1a237e', fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2 }}>
          Admissions 2026–27
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', mb: { xs: 4, md: 7 }, color: '#475569', fontWeight: 400, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
          Join the Gyan Ganga Public School family. Follow the guidelines below or drop us an inquiry.
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 4, md: 6 }, alignItems: 'flex-start' }}>

          {/* Left: Admission Workflow */}
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Typography variant="h4" gutterBottom sx={{ color: '#ffb300', fontWeight: 800, fontSize: { xs: '1.4rem', md: '1.8rem' } }}>
                Admission Workflow
              </Typography>
              <Stepper activeStep={-1} orientation="vertical" sx={{ mt: 3, '& .MuiStepConnector-line': { borderColor: '#e8eaf6' } }}>
                {steps.map((step) => (
                  <Step key={step.label} active={true}>
                    <StepLabel
                      slotProps={{ stepIcon: { sx: { color: '#1a237e' } } }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>{step.label}</Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.85, pb: 1, fontSize: { xs: '0.875rem', md: '0.9rem' } }}>
                        {step.description}
                      </Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>

              {/* Docs required */}
              <Box sx={{ mt: 4, p: 3, backgroundColor: '#e8eaf6', borderRadius: '16px' }}>
                <Typography variant="h6" sx={{ color: '#1a237e', fontWeight: 700, mb: 2 }}>Documents Required</Typography>
                {['Transfer Certificate (TC)', 'Last Class Report Card', '4 Passport-size Photos', 'Aadhaar / Birth Certificate', 'Category Certificate (if applicable)'].map((doc) => (
                  <Box key={doc} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <CheckCircle size={16} color="#1a237e" />
                    <Typography variant="body2" sx={{ color: '#1e293b' }}>{doc}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Right: Inquiry Form */}
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Card sx={{ borderRadius: '24px', boxShadow: '0 8px 40px rgba(26,35,126,0.12)', overflow: 'hidden' }}>
                <Box sx={{ background: 'linear-gradient(135deg, #1a237e, #534bae)', p: { xs: 2.5, md: 3.5 } }}>
                  <Typography variant="h4" sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.4rem', md: '1.8rem' } }}>
                    Online Inquiry Form
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mt: 0.5 }}>
                    Fill out the form and our admissions team will contact you.
                  </Typography>
                </Box>
                <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                  {submitSuccess && (
                    <Alert severity="success" sx={{ mb: 3, borderRadius: '12px' }}>
                      Thank you for your inquiry! We will get back to you shortly.
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    {/* Two column on md+ */}
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2.5 }}>
                      <Controller name="parentName" control={control} render={({ field }) => (
                        <TextField {...field} fullWidth label="Parent/Guardian Name" error={!!errors.parentName} helperText={errors.parentName?.message} />
                      )} />
                      <Controller name="studentName" control={control} render={({ field }) => (
                        <TextField {...field} fullWidth label="Student Name" error={!!errors.studentName} helperText={errors.studentName?.message} />
                      )} />
                      <Controller name="phone" control={control} render={({ field }) => (
                        <TextField {...field} fullWidth label="Phone Number" error={!!errors.phone} helperText={errors.phone?.message} />
                      )} />
                      <Controller name="email" control={control} render={({ field }) => (
                        <TextField {...field} fullWidth label="Email Address" type="email" error={!!errors.email} helperText={errors.email?.message} />
                      )} />
                    </Box>
                    <Controller name="grade" control={control} render={({ field }) => (
                      <TextField {...field} fullWidth label="Grade Applying For (e.g. Class 1)" error={!!errors.grade} helperText={errors.grade?.message} />
                    )} />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      disabled={isSubmitting}
                      sx={{
                        py: 1.75, mt: 0.5, borderRadius: '12px',
                        fontWeight: 700, textTransform: 'none', fontSize: '1rem',
                        background: 'linear-gradient(135deg, #1a237e, #534bae)',
                        '&:hover': { background: 'linear-gradient(135deg, #000051, #1a237e)' },
                      }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
