import { useState } from 'react'
import reactLogo from './assets/inmogr.svg'
import './App.css'
import tw from "tailwind-styled-components"
import Header from "./components/Common/Header";
import TrackerContainer from "./components/Tracker/Container";

function App() {
  const [count, setCount] = useState(0)

  const Container = tw.div``


  return (
    <Container>
        <Header/>
        <TrackerContainer/>
    </Container>
  )
}

export default App
