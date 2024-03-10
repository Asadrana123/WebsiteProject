import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, useMediaQuery } from '@mui/material';
import CardComponent from './Card/CardComponent';

const Container2 = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Grid container sx={{ marginTop: 10,marginBottom:10 }}>
      {/* First grid item */}
      <Grid container xs={12} textAlign="center" sx={{ justifyContent: 'center' }}>
        <Grid item xs={2}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/002/372/378/small_2x/cute-star-character-mascot-flat-cartoon-emoticon-design-illustration-vector.jpg" style={{ width: 30, height: 30 }} alt="star" />
        </Grid>
        <Grid item xs={8} md={6}>
          <Typography variant={isSmallScreen ? 'h5' : 'h3'}>
            Elevate Your Essay to Perfection
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/002/372/378/small_2x/cute-star-character-mascot-flat-cartoon-emoticon-design-illustration-vector.jpg" style={{ width: 30, height: 30 }} alt="star" />
        </Grid>
      </Grid>

      {/* Second grid item */}
      <Grid container xs={12}>
        {/* Your content for the second grid item */}
        <Grid container xs={12} spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid item xs={8} md={4} className='hoverGrid'><CardComponent /></Grid>
          <Grid item xs={8} md={4} className='hoverGrid'><CardComponent /></Grid>
        </Grid>
        <Grid container xs={12} spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid item xs={8} md={4} className='hoverGrid'><CardComponent /></Grid>
          <Grid item xs={8} md={4} className='hoverGrid'><CardComponent /></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Container2;
