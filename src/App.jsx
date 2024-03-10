import { Fragment, useState } from 'react'
import './App.css'
import Navbar from '../Components/Navbar'
import Container1 from '../Components/Container1'
import Container2 from '../Components/Container2'
import Container3 from '../Components/Container3/Container3'
function App() {
  return (
    <Fragment>
         <Navbar/>
         <Container1/>
         <Container2/>
         <Container3/>
    </Fragment>
  )
}

export default App
