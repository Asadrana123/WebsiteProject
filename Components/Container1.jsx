import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Hidden from '@mui/material/Hidden';
import { Button } from '@mui/material';

const Container1 = () => {
    return (
        <Grid container style={{  marginTop: 16}}>

            {/* Left container (visible at all sizes) */}
            <Grid item xs={12} md={6} sx={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2 ,textAlign:"center"}}>
                <h1>
                    <span>Supercharge</span>
                    <br></br>
                    your college essay
                </h1>
                <Button variant="contained" style={{ marginRight: 10, color: "white", backgroundColor: "black", marginBottom: 2 }}>Revise your essay</Button><br></br>
                <Button variant="contained" style={{ marginRight: 10, color: "black", backgroundColor: "white" }}>Learn more </Button>
            </Grid>

            {/* Right container (visible only on larger screens) */}
            <Hidden mdDown>
                <Grid item xs={12} md={6}>
                    <Typography variant="h1">Animation</Typography>
                </Grid>
            </Hidden>
        </Grid>
    );
};

export default Container1;
