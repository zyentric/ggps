import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Stepper, Step, StepLabel, StepContent, TextField, Button, Alert } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';

const steps = [
  {
    label: 'Check Eligibility',
    description: 'Nursery to Class 9 & 11. Nursery admissions require a minimum age of 3 years verified by an official birth certificate. Entry into mid-stream classes (VI, IX, XI) depends on baseline aptitude tests and seat availability.',
  },
  {
    label: 'Procure the Application Form',
    description: 'Parents must secure the official physical application form directly from the school\'s administrative office.',
  },
  {
    label: 'Document Compilation',
    description: 'Gather original and two sets of copies of: Transfer Certificate (TC) from the previous school, Report Card/Marksheet from the last passed class, 4 Passport-size photographs, and a Category Certificate (if applicable).',
  },
  {
    label: 'Interaction & Review',
    description: 'Attend the candidate evaluation interaction. Final enrollment remains at the sole discretion of the Principal based on overall merit, baseline evaluations, and seat allocation rules.',
  },
];

const schema = yup.object({
  parentName: yup.string().required('Parent name is required'),
  studentName: yup.string().required('Student name is required'),
  phone: yup.string().required('Phone number is required').matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  grade: yup.string().required('Grade applying for is required'),
}).required();

type FormData = yup.InferType<typeof schema>;

export const Admissions: React.FC = () => {
  const [activeStep] = useState(0);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
    defaultValues: {
      parentName: '',
      studentName: '',
      phone: '',
      email: '',
      grade: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <Box style={styles.root}>
      <Container maxWidth="lg">
        <Typography variant="h2" style={styles.pageTitle} gutterBottom>
          Admissions 2026-27
        </Typography>
        <Typography variant="h6" style={styles.pageDesc}>
          Join the Gyan Ganga Public School family. Follow the guidelines below or drop an inquiry.
        </Typography>

        <Box style={styles.gridContainer}>
          {/* Workflow Section */}
          <Box>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Typography variant="h4" gutterBottom style={styles.secondaryTitle}>
                Admission Workflow
              </Typography>
              <Stepper activeStep={activeStep} orientation="vertical" style={styles.stepper}>
                {steps.map((step) => (
                  <Step key={step.label} active={true}>
                    <StepLabel>
                      <Typography variant="h6">{step.label}</Typography>
                    </StepLabel>
                    <StepContent>
                      <Typography variant="body1" style={styles.stepDesc}>{step.description}</Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </motion.div>
          </Box>

          {/* Inquiry Form Section */}
          <Box>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Card style={styles.formCard}>
                <CardContent>
                  <Typography variant="h4" gutterBottom style={styles.primaryTitle}>
                    Online Inquiry Form
                  </Typography>
                  <Typography variant="body2" style={styles.formDesc}>
                    Fill out the form below to register your interest, and our admissions team will contact you.
                  </Typography>

                  {submitSuccess && (
                    <Alert severity="success" style={styles.alert}>
                      Thank you for your inquiry! We will get back to you shortly.
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Box style={styles.formGrid}>
                      <Box style={styles.fullWidth}>
                        <Controller
                          name="parentName"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Parent/Guardian Name"
                              error={!!errors.parentName}
                              helperText={errors.parentName?.message}
                            />
                          )}
                        />
                      </Box>
                      <Box style={styles.fullWidth}>
                        <Controller
                          name="studentName"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Student Name"
                              error={!!errors.studentName}
                              helperText={errors.studentName?.message}
                            />
                          )}
                        />
                      </Box>
                      <Box>
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Phone Number"
                              error={!!errors.phone}
                              helperText={errors.phone?.message}
                            />
                          )}
                        />
                      </Box>
                      <Box>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Email Address"
                              type="email"
                              error={!!errors.email}
                              helperText={errors.email?.message}
                            />
                          )}
                        />
                      </Box>
                      <Box style={styles.fullWidth}>
                        <Controller
                          name="grade"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Grade Applying For (e.g. Class 1)"
                              error={!!errors.grade}
                              helperText={errors.grade?.message}
                            />
                          )}
                        />
                      </Box>
                      <Box style={styles.fullWidth}>
                        <Button 
                          type="submit" 
                          variant="contained" 
                          color="primary" 
                          size="large" 
                          fullWidth 
                          disabled={isSubmitting}
                          style={styles.submitBtn}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                        </Button>
                      </Box>
                    </Box>
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

const styles: Record<string, React.CSSProperties> = {
  root: {
    padding: '96px 0',
    minHeight: '100vh',
  },
  pageTitle: {
    textAlign: 'center',
    color: '#1a237e',
  },
  pageDesc: {
    textAlign: 'center',
    marginBottom: '64px',
    color: '#475569',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '48px',
  },
  secondaryTitle: {
    color: '#ffb300',
  },
  stepper: {
    marginTop: '32px',
  },
  stepDesc: {
    color: '#475569',
  },
  formCard: {
    padding: '16px',
    borderRadius: '24px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  primaryTitle: {
    color: '#1a237e',
  },
  formDesc: {
    color: '#475569',
    marginBottom: '32px',
  },
  alert: {
    marginBottom: '24px',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  },
  fullWidth: {
    gridColumn: '1 / -1',
  },
  submitBtn: {
    padding: '12px 0',
    marginTop: '16px',
  }
};
