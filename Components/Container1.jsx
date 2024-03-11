import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Hidden from '@mui/material/Hidden';
import { Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Lottie from 'lottie-react';
import WritingAnimation from "../animation/WritingAnimation.json";
import useMediaQuery from '@mui/material/useMediaQuery';
const Container1 = () => {
    const isScreenLarge = useMediaQuery('(min-width:900px)');
    return (
        <Grid container style={{ marginTop: 16 }}>

            {/* Left container (visible at all sizes) */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
            <h1 style={{
                    fontSize: isScreenLarge ? '60px' : '48px',
                    textAlign: isScreenLarge ? '' : 'center',
                    fontWeight:"bold"
                }}>
                    <span className='color-change'>Supercharge</span>
                    <br></br>
                    your college essay
                </h1>
                <button className='pushable'>
                    <span className='front'>Revise your essay  <ArrowForward/>
                    </span>
                </button>
                <button className='pushable' style={{marginTop:"12px"}}>
                    <span className='front'>Learn more  <ArrowForward/>
                    </span>
                </button>
            </Grid>

            {/* Right container (visible only on larger screens) */}
            <Hidden mdDown>
                <Grid item xs={12} md={6}>
                    <Lottie animationData={WritingAnimation} width="100%" height="100%" />
                </Grid>
            </Hidden>
        </Grid>
    );
};

export default Container1;
