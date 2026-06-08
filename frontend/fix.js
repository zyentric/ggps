const fs = require('fs');

const files = [
  'src/components/layout/Navbar.tsx', 
  'src/components/layout/Footer.tsx', 
  'src/pages/Home.tsx', 
  'src/pages/About.tsx', 
  'src/pages/Academics.tsx', 
  'src/pages/Admissions.tsx', 
  'src/components/ErrorBoundary.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix Typography textAlign (single or double quotes)
    content = content.replace(/textAlign="center"/g, "sx={{ textAlign: 'center' }}");
    content = content.replace(/textAlign="right"/g, "sx={{ textAlign: 'right' }}");
    
    // Fix Grid items
    content = content.replace(/<Grid\s+item\s+xs=\{([^}]+)\}\s+sm=\{([^}]+)\}\s+md=\{([^}]+)\}\s+key=\{([^}]+)\}\s*>/g, '<Grid size={{ xs: $1, sm: $2, md: $3 }} key={$4}>');
    content = content.replace(/<Grid\s+item\s+xs=\{([^}]+)\}\s+md=\{([^}]+)\}\s+key=\{([^}]+)\}\s*>/g, '<Grid size={{ xs: $1, md: $2 }} key={$3}>');
    content = content.replace(/<Grid\s+item\s+xs=\{([^}]+)\}\s+key=\{([^}]+)\}\s*>/g, '<Grid size={{ xs: $1 }} key={$2}>');

    content = content.replace(/<Grid\s+item\s+xs=\{([^}]+)\}\s+sm=\{([^}]+)\}\s+md=\{([^}]+)\}\s*>/g, '<Grid size={{ xs: $1, sm: $2, md: $3 }}>');
    content = content.replace(/<Grid\s+item\s+xs=\{([^}]+)\}\s+md=\{([^}]+)\}\s*>/g, '<Grid size={{ xs: $1, md: $2 }}>');
    content = content.replace(/<Grid\s+item\s+xs=\{([^}]+)\}\s+sm=\{([^}]+)\}\s*>/g, '<Grid size={{ xs: $1, sm: $2 }}>');
    content = content.replace(/<Grid\s+item\s+xs=\{([^}]+)\}\s*>/g, '<Grid size={{ xs: $1 }}>');
    
    // Stepper item <Grid item xs={12} md={6}> might be covered above.
    
    // <Grid item xs={6}> inside Home.tsx
    content = content.replace(/<Grid\s+item\s+xs=\{6\}\s*>/g, '<Grid size={{ xs: 6 }}>');
    content = content.replace(/<Grid\s+item\s+xs=\{12\}\s*>/g, '<Grid size={{ xs: 12 }}>');
    
    // Fix <Grid item> without size
    content = content.replace(/<Grid\s+item\s*>/g, '<Grid>');

    fs.writeFileSync(file, content);
  }
});
