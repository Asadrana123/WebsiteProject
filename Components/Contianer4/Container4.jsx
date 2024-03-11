import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';
import "./Contianer4.css";
const Container4 = () => {
  return (
    <Grid container spacing={2} className="my-component-container" style={{marginTop:"40px"}}>
      {/* Card 1 */}
      <Grid item xs={12} sm={6}  md={4}>
        <Card className="my-card">
          <CardMedia
            component="img"
            className="my-card-media"
            image="https://essays.admityogi.com/_next/image?url=https%3A%2F%2Fadmityogi.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1573167243872-43c6433b9d40%253Fq%253D80%2526w%253D2669%2526auto%253Dformat%2526fit%253Dcrop%2526ixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%25253D%25253D%26w%3D3840%26q%3D75&w=1920&q=75" // Replace with your image URL
            alt="Card Image 1"
          />
          <CardContent className="my-card-content">
            <Typography variant="body2" color="textSecondary">
            12 Highly Successful College Admissions Essays with Expert Feedback from Professional Writers and Advanced AI Tools
            </Typography>
            <Button variant="contained" color="primary" className="my-button">
              Read More
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Card 2 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card className="my-card">
          <CardMedia
            component="img"
            className="my-card-media"
            image="https://essays.admityogi.com/_next/image?url=https%3A%2F%2Fadmityogi.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1573167243872-43c6433b9d40%253Fq%253D80%2526w%253D2669%2526auto%253Dformat%2526fit%253Dcrop%2526ixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%25253D%25253D%26w%3D3840%26q%3D75&w=1920&q=75" // Replace with your image URL
            alt="Card Image 2"
          />
          <CardContent className="my-card-content">
            <Typography variant="body2" color="textSecondary">
            12 Highly Successful College Admissions Essays with Expert Feedback from Professional Writers and Advanced AI Tools
            </Typography>
            <Button variant="contained" color="primary" className="my-button">
              Read More
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Card 3 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card className="my-card">
          <CardMedia
            component="img"
            className="my-card-media"
            image="https://essays.admityogi.com/_next/image?url=https%3A%2F%2Fadmityogi.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1573167243872-43c6433b9d40%253Fq%253D80%2526w%253D2669%2526auto%253Dformat%2526fit%253Dcrop%2526ixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%25253D%25253D%26w%3D3840%26q%3D75&w=1920&q=75" // Replace with your image URL
            alt="Card Image 3"
          />
          <CardContent className="my-card-content">
            <Typography variant="body2" color="textSecondary">
            12 Highly Successful College Admissions Essays with Expert Feedback from Professional Writers and Advanced AI Tools
            </Typography>
            <Button variant="contained" color="primary" className="my-button">
              Read More
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Container4;
