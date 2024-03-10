import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from '@mui/material';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:825px)'); // Adjust the breakpoint as needed

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{backgroundColor:"white",color:"black",boxShadow:"none"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Logo
          </Typography>
          
          {/* Items and div for screens greater than 'md' */}
          {!isMobile && (
            <>
              <div color="inherit" style={{marginRight:40,cursor:"pointer"}}>Read Profiles</div>
              <div color="inherit" style={{marginRight:40,cursor:"pointer"}}>Revise Essays</div>
              <div color="inherit"style={{marginRight:40,cursor:"pointer"}}>Schools</div>
              <div color="inherit" style={{marginRight:40,cursor:"pointer"}}>ChanceMe</div>
              <div color="inherit" style={{marginRight:40,cursor:"pointer"}}>Packages</div>
              <Button variant="contained" style={{marginRight:10,color:"white" ,backgroundColor:"black"}}>Get Started</Button>
            </>
          )}

          {isMobile && (
                 <IconButton color="inherit" onClick={handleDrawerOpen} sx={{ cursor: 'pointer' }}>
                 <MenuIcon />
               </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {isMobile && (
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
          <List>
            <ListItem  onClick={handleDrawerClose}>
              <div color="inherit">Item 1</div>
            </ListItem>
            <ListItem  onClick={handleDrawerClose}>
              <div color="inherit">Item 2</div>
            </ListItem>
            <ListItem  onClick={handleDrawerClose}>
              <div color="inherit">Item 3</div>
            </ListItem>
            <ListItem  onClick={handleDrawerClose}>
              <div color="inherit">Item 4</div>
            </ListItem>
            <ListItem  onClick={handleDrawerClose}>
              <div color="inherit">Item 5</div>
            </ListItem>
            <ListItem  onClick={handleDrawerClose}>
              <div color="inherit">div</div>
            </ListItem>
          </List>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
