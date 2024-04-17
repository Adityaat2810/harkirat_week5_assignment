import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import CreateCard from './components/createCard'

function App() {
  const [card, setCard] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/api/card')
  .then(async function(res){
    console.log(res);
    const resp =await res.json();
    console.log(resp);
    setCard(resp.data)
  })
  }, [])


  return (
    <>

    <CreateCard/>
     
     <Card props={card}></Card>
       
    </>
  )
}

export default App
