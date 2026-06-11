import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Drawer, List, ListItem, ListItemText, ListItemButton, useTheme } from '@mui/material';
import { Menu as MenuIcon, Sun, Moon, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { useColorMode } from '../../App';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const colorMode = useColorMode();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 260 }}>
      <Box sx={{ py: 2, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
        <GraduationCap size={24} color="#1a237e" />
        <Typography variant="h6" sx={{ fontWeight: 800, color: '#1a237e' }}>GGPS</Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{ justifyContent: 'center' }}
            >
              <ListItemText
                primary={item.label}
                slotProps={{ primary: { sx: { fontWeight: location.pathname === item.path ? 700 : 400 } } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ px: 2, pt: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/admissions"
            fullWidth
            sx={{ borderRadius: '24px' }}
          >
            Apply Now
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={1}
        sx={{ backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)' }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 0.5 }}>
            {/* Logo */}
            <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', gap: 1 }}>
              <GraduationCap size={32} color="#1a237e" />
              <Box>
                <Typography variant="h6" noWrap sx={{ fontWeight: 800, letterSpacing: '.05rem', color: '#1a237e', lineHeight: 1.1 }}>
                  {siteConfig.shortName}
                </Typography>
                <Typography variant="caption" sx={{ color: '#475569', display: { xs: 'none', sm: 'block' } }}>
                  Demo City, Demo State
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    color: location.pathname === item.path ? '#1a237e' : 'inherit',
                    fontWeight: location.pathname === item.path ? 700 : 400,
                    position: 'relative',
                    '&::after': location.pathname === item.path ? {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60%',
                      height: 2,
                      backgroundColor: '#1a237e',
                      borderRadius: 1,
                    } : {},
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={{ ml: 1 }}>
                {theme.palette.mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </IconButton>

              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/admissions"
                sx={{ ml: 1, borderRadius: '24px', px: 2.5, fontWeight: 700, textTransform: 'none' }}
              >
                Apply Now
              </Button>
            </Box>

            {/* Mobile Navigation Toggle */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </IconButton>
              <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        slotProps={{ paper: { sx: { width: 260 } } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
