import React from 'react'
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { borders } from '@mui/system';



const data = [
  {
    id: "1",
    que: "What is AdmitYogi Essay?",
    ans: "AdmitYogi Essay is an advanced essay revision tool designed for college admissions essays. It utilizes Large Language Models to offer a comprehensive analysis and improvement suggestions, transcending the capabilities of basic grammar checkers like Grammarly or conventional ChatGPT."
  },
  {
    id: "2",
    que: "How does AdmitYogi Essay differ from other tools like Grammarly?",
    ans: "AdmitYogi Essay is an advanced essay revision tool designed for college admissions essays. It utilizes Large Language Models to offer a comprehensive analysis and improvement suggestions, transcending the capabilities of basic grammar checkers like Grammarly or conventional ChatGPT."
  },
  {
    id: "3",
    que: "What are the steps involved in the evaluation process?",
    ans: "The process includes three steps: <br> <span style='margin-left:10px'>1) Central Theme validation (assessing memorability, emotional depth, specific examples, humility, clarity, etc.).</span> <br> <span style='margin-left:10px'>2) Writing Fundamentals (checking grammatical errors, vocabulary usage, syntax, punctuation, etc.).</span> <br> <span style='margin-left:10px'>3) Admissions Rubrics (applying specific rubrics based on the essay type, rating aspects like writing quality, personal voice, authenticity, etc.).<span>"
  },
  {
    id: "4",
    que: "How is my essay scored?",
    ans: "For Central Theme and Writing Fundamentals - you are scored on a scale of 10. If you scored 7 or higher, you can consider that your essay has passed these rubrics and focus on Admissions rubrics. For Admission Rubrics, you are scored on a 20-point scale based on 5 specific rubrics, which vary depending on the essay type. A score of 17 and above is considered a successful submission-ready essay."
  },
  {
    id: "5",
    que: "What features does AdmitYogi Essays offer for free?",
    ans: "Free features include a comprehensive 3-step evaluation, integration with Grammarly, and a memorability analysis for different types of essays."
  },
  {
    id: "6",
    que: "How much does it cost to use AdmitYogi Essay?",
    ans: "Essay revisions can be purchased with AdmitYogi Credits, starting as low as 5 credits each. We are also planning to introduce 1-month and 3-month passes for unlimited usage. Stay tuned for these exciting updates!"
  },
  {
    id: "7",
    que: "What additional services are offered with AdmitYogi Credits?",
    ans: "Paid services include detailed feedback that outlines the strength of the essay and offers constructive criticism, and personalized recommendations for improving your essay, attached to specific rubrics for targeted improvement."
  },
  {
    id: "8",
    que: "How does AdmitYogi Essays ensure the security of my data?",
    ans: "We prioritize the security and privacy of your data. We take stringent measures to ensure its safety and confidentiality. You can trust that your data is handled responsibly, used solely for analysis purposes, and protected by strict protocols."
  },
  {
    id: "9",
    que: "Where can I get help if I have issues with the tool?",
    ans: "Our customer support team is available to assist you with any questions or issues. You can contact us at<a style='color:#3CB2FD' href='mailto: admityogi@gmail.com'>admityogi@gmail.com</a>, and we will do our best to get back to you as soon as possible."
  },
]

function Faq() {
  return (
    <Box 
    component="section"
    display={'flex'}
    flexDirection="column"
    textAlign="center"
    marginTop="80px"
    backgroundColor=""
    >

      <Typography variant='h2' style={{ fontWeight:"510",backgroundColor:""}}>Frequently <span style={{color:"#3CB2FD"}}>asked questions</span></Typography>
      <Box
      margin="auto"
      my={4}
      alignItems="center"
      gap={4}
      p={2}
      maxWidth="1248px" 
      >
      {
        data.map((item)=>(
        <Box key={item.id} style={{marginTop: "16px"}} >
          <Accordion 
          
          >
            <AccordionSummary
            style={{margin:'10px'}}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
              >
                <h3>{item.que}</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>{item.ans}</p>
            </AccordionDetails>
          </Accordion>
          </Box>
        ))
      }
      </Box>

    </Box>
  )
}

export default Faq