import { Fragment, useState } from 'react'
import './App.css'
import Navbar from '../Components/Navbar'
import Container1 from '../Components/Container1'
import Container2 from '../Components/Container2'
import Container3 from '../Components/Container3/Container3'
import Container4 from '../Components/Contianer4/Container4'
import Faq from '../Components/Accordian/Faq'
import Footer from '../Components/Footer/Footer'
function App() {
  return (
    <Fragment>
         <Navbar/>
         <Container1/>
         <Container2/>
         <Container3/>
         <Container4/>
         <Faq/>
         {/* <Footer/> */}
    </Fragment>
  )
}

export default App
