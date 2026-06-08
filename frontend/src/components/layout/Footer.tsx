import React from 'react';
import { Box, Container, Typography, Link as MuiLink, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
];

export const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#1a237e', color: 'white', pt: { xs: 5, md: 7 }, pb: 4, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 4, md: 5 }, justifyContent: 'space-between', pb: 5, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>

          {/* Brand */}
          <Box sx={{ flex: '2 1 220px', minWidth: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <GraduationCap size={32} color="#ffb300" />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2 }}>{siteConfig.shortName}</Typography>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>Shakteshgarh, Mirzapur</Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2.5, lineHeight: 1.8, maxWidth: 320 }}>
              {siteConfig.tagline}. Providing quality education from LKG to Class XII since 2015.
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <IconButton color="inherit" size="small" aria-label="Facebook" component="a" href={siteConfig.socials.facebook} sx={{ '&:hover': { color: '#4267B2' } }}>
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton color="inherit" size="small" aria-label="Twitter" component="a" href={siteConfig.socials.twitter} sx={{ '&:hover': { color: '#1DA1F2' } }}>
                <Twitter fontSize="small" />
              </IconButton>
              <IconButton color="inherit" size="small" aria-label="Instagram" component="a" href={siteConfig.socials.instagram} sx={{ '&:hover': { color: '#E1306C' } }}>
                <Instagram fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: '1 1 140px', minWidth: 0 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2.5, letterSpacing: '0.05em', color: '#ffb300' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {quickLinks.map((l) => (
                <MuiLink
                  key={l.path}
                  component={Link}
                  to={l.path}
                  color="inherit"
                  underline="none"
                  sx={{ opacity: 0.8, fontSize: '0.9rem', transition: 'opacity 0.2s, color 0.2s', '&:hover': { opacity: 1, color: '#ffb300' } }}
                >
                  → {l.label}
                </MuiLink>
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box sx={{ flex: '1 1 200px', minWidth: 0 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2.5, letterSpacing: '0.05em', color: '#ffb300' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { icon: <MapPin size={18} />, text: siteConfig.contact.address },
                { icon: <Phone size={18} />, text: siteConfig.contact.phone },
                { icon: <Mail size={18} />, text: siteConfig.contact.email },
              ].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <Box sx={{ mt: '2px', flexShrink: 0, opacity: 0.8 }}>{item.icon}</Box>
                  <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.7 }}>{item.text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

        </Box>

        {/* Bottom Bar */}
        <Box sx={{ pt: 3, display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, flexWrap: 'wrap', gap: 1, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.5, fontSize: '0.75rem' }}>
            Shakteshgarh, Mirzapur, Uttar Pradesh
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
