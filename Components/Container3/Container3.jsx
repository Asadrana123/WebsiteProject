import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Emoji from "../../src/assets/Emoji.svg"
import MoodIcon from '@mui/icons-material/Mood'; 
const Container3 = () => {
  return (
    <Grid container  style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
      {/* Left side - Button with Arrow Icon */}
      <Grid item xs={10} md={5} style={{ backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center',marginBottom:"30px"}}>
      <button
        className='pushable'
      >
       <span className='front'>Essay Insights<span> <ArrowForwardIcon /></span></span>
      </button>
    </Grid>

      {/* Right side - Typography */}
      <Grid item xs={10} md={7} style={{ display:"flex", justifyContent:"center",alignItems:"center"}}>
        <Typography variant="h4" sx={{fontWeight:"bold", fontSize:"40px"}}>
          <span><img src={Emoji}  width="30" height="30" /></span> Learn how to write a successful personal statement and supplements in our Blog
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Container3;
