import React from 'react';
import { Box, Container, Typography, Link as MuiLink, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

export const Footer: React.FC = () => {
  return (
    <Box component="footer" style={styles.footer}>
      <Container maxWidth="lg">
        <Box style={styles.gridContainer}>
          <Box style={styles.gridItem}>
            <Typography variant="h6" gutterBottom style={styles.title}>
              {siteConfig.name}
            </Typography>
            <Typography variant="body2" style={styles.tagline}>
              {siteConfig.tagline}
            </Typography>
            <Box style={styles.socialBox}>
              <IconButton color="inherit" aria-label="Facebook" component="a" href={siteConfig.socials.facebook}>
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter" component="a" href={siteConfig.socials.twitter}>
                <Twitter fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram" component="a" href={siteConfig.socials.instagram}>
                <Instagram fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          
          <Box style={styles.gridItem}>
            <Typography variant="h6" gutterBottom style={styles.title}>
              Quick Links
            </Typography>
            <Box style={styles.linksBox}>
              <MuiLink component={Link} to="/" color="inherit" underline="hover">
                Home
              </MuiLink>
              <MuiLink component={Link} to="/about" color="inherit" underline="hover">
                About Us
              </MuiLink>
              <MuiLink component={Link} to="/academics" color="inherit" underline="hover">
                Academics
              </MuiLink>
              <MuiLink component={Link} to="/admissions" color="inherit" underline="hover">
                Admissions
              </MuiLink>
            </Box>
          </Box>
          
          <Box style={styles.gridItem}>
            <Typography variant="h6" gutterBottom style={styles.title}>
              Contact Us
            </Typography>
            <Box style={styles.contactBox}>
              <Box style={styles.contactItem}>
                <MapPin size={20} style={styles.contactIcon} />
                <Typography variant="body2">{siteConfig.contact.address}</Typography>
              </Box>
              <Box style={styles.contactItem}>
                <Phone size={20} style={styles.contactIcon} />
                <Typography variant="body2">{siteConfig.contact.phone}</Typography>
              </Box>
              <Box style={styles.contactItem}>
                <Mail size={20} style={styles.contactIcon} />
                <Typography variant="body2">{siteConfig.contact.email}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        
        <Box style={styles.bottomBar}>
          <Typography variant="body2" style={styles.copyright}>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

const styles: Record<string, React.CSSProperties> = {
  footer: {
    backgroundColor: '#1a237e',
    color: 'white',
    paddingTop: '48px',
    paddingBottom: '48px',
    marginTop: 'auto',
  },
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
    justifyContent: 'space-between',
  },
  gridItem: {
    flex: '1 1 250px',
  },
  title: {
    fontWeight: 'bold',
  },
  tagline: {
    marginBottom: '16px',
    opacity: 0.8,
  },
  socialBox: {
    display: 'flex',
    gap: '8px',
  },
  linksBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  contactBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  },
  contactIcon: {
    flexShrink: 0,
    marginTop: '4px',
  },
  bottomBar: {
    marginTop: '40px',
    paddingTop: '24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
  },
  copyright: {
    opacity: 0.8,
  }
};
