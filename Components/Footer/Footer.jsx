import React from 'react'
import { Box } from '@mui/material'
import Button from '@mui/material/Button';

function Footer() {
  return (
    <div
           className='footer-container'    >
      <div
    style={{ width:"fit-content", margin:"auto"}}
    >
      <Box
      display="flex"
      width="70vw"
      justifyContent="space-between"
      >
        <Box margin="16px" p='4px'><p>Your Logo</p></Box>
        <Box margin="16px" p='4px'
        >
        <p>ABOUT</p>
        <ul style={{listStyle:"none", margin:"0px", padding:"0px"}}>
          <li>Mission</li>
          <li>Testimonials</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Packages</li>
          <li>Contact Us</li>
        </ul>
        </Box>
        <Box margin="16px" p='4px'>
          <p>Product</p>
          <ul style={{listStyle:"none", margin:"0px", padding:"0px"}}>
            <li>Profiles</li>
            <li>Essays</li>
            <li>ChanceMe</li>
          </ul>
        </Box>
        <Box margin="16px" p='4px'>
          <p>SCHOOLS</p>
          <ul style={{listStyle:"none", margin:"0px", padding:"0px"}}>
            <li>Stanford</li>
            <li>Harvard</li>
            <li>MIT</li>
            <li>Columbia</li>
            <li>Princeton</li>
            <li>Duke</li>
            <li>Yale</li>
            <li>Dartmouth</li>
            <li>Cornell</li>
            <li>UChicago</li>
            <li>Brown</li>
          </ul>
        </Box>
        <Box margin="16px" p='4px'>
          <p>RECENTS POSTS</p>
          <ul style={{listStyle:"none", margin:"0px", padding:"0px"}}>
            <li>Posts1</li>
            <li>Posts2</li>
            <li>Posts3</li>
          </ul>
        </Box>
        <Box margin="16px" p='4px'>
          <p><Button variant="contained">Get<br /> Started</Button></p>
        </Box>
      </Box>

      <Box
      display="flex"
      width="70vw"
      >
        <Box margin="16px" p="4px">
          <p>svg here</p>
        </Box>
        <Box margin="16px" p="4px">
          <p>Website</p>
          <ul style={{listStyle:"none", margin:"0px", padding:"0px"}}>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund a Purchase</li>
          </ul>
        </Box>
      </Box>

      <Box
      width="70vw"
      display="flex"
      justifyContent="space-between"
      >
        <Box margin="16px" p="4">Icons</Box>
        <Box margin="16px" p="4">email</Box>
        <Box margin="16px" p="4">desc</Box>
      </Box>
    </div>
  </div>
  )
}

export default Footer