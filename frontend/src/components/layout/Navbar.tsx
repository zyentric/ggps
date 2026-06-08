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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} style={styles.drawerContainer}>
      <Box style={styles.drawerHeader}>
        <GraduationCap size={24} style={styles.iconPrimary} />
        <Typography variant="h6" style={styles.drawerTitle}>
          GGPS
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton component={Link} to={item.path} selected={location.pathname === item.path}>
              <ListItemText primary={item.label} style={styles.textCenter} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1} style={styles.appBar}>
        <Container maxWidth="lg">
          <Toolbar disableGutters style={styles.toolbar}>
            {/* Logo */}
            <Box component={Link} to="/" style={styles.logoContainer}>
              <GraduationCap size={32} style={styles.iconPrimary} />
              <Typography variant="h6" noWrap style={styles.logoText}>
                {siteConfig.shortName}
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box style={styles.desktopNav}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  style={{
                    ...styles.navButton,
                    color: location.pathname === item.path ? '#1a237e' : 'inherit',
                    fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                  }}
                >
                  {item.label}
                </Button>
              ))}
              
              <IconButton style={styles.themeToggleBtn} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </IconButton>
              
              <Button variant="contained" color="secondary" component={Link} to="/admissions" style={styles.applyBtn}>
                Apply Now
              </Button>
            </Box>

            {/* Mobile Navigation Toggle */}
            <Box style={styles.mobileNavToggle}>
              <IconButton onClick={colorMode.toggleColorMode} color="inherit" style={styles.mobileThemeBtn}>
                {theme.palette.mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        slotProps={{
          paper: {
            style: styles.drawerPaper
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
  appBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    gap: '8px',
  },
  iconPrimary: {
    color: '#1a237e',
  },
  logoText: {
    fontWeight: 800,
    letterSpacing: '.1rem',
    color: '#1a237e',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  navButton: {
    textTransform: 'none',
    fontSize: '1rem',
  },
  themeToggleBtn: {
    marginLeft: '8px',
  },
  applyBtn: {
    marginLeft: '16px',
    borderRadius: '24px',
    padding: '6px 20px',
  },
  mobileNavToggle: {
    display: 'flex',
    alignItems: 'center',
  },
  mobileThemeBtn: {
    marginRight: '8px',
  },
  drawerContainer: {
    textAlign: 'center',
  },
  drawerHeader: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  drawerTitle: {
    fontWeight: 'bold',
    color: '#1a237e',
  },
  textCenter: {
    textAlign: 'center',
  },
  drawerPaper: {
    width: '250px',
  }
};
