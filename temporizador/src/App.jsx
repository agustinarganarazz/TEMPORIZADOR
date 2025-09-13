import { useEffect, useState } from 'react'
import './App.css'
import Countdown from './components/CountDown/Countdown'

function App() {
  const [targetSeconds, setTargetSeconds] = useState(null)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)

  const parseForm = (e) => {
    e.preventDefault()
    const seconds = e.target.seconds.value
    setTargetSeconds(parseInt(seconds))
    console.log(seconds)
  }

  useEffect(() => {
    if (targetSeconds === null) return
    setElapsedSeconds(0)
    let interval = setInterval(() => {
      setElapsedSeconds((elapsedSeconds)=>elapsedSeconds + 1)
    }, 1000);
    return ()=>console.log('clear')

  }, [targetSeconds])

  if (elapsedSeconds >= targetSeconds  && targetSeconds !== null) {
    return (
      <div>
        <h1>Termino el conteo</h1>
        <button onClick={()=>setTargetSeconds(null)}>REINICIAR</button>
      </div>

    )
  }
  if (targetSeconds !== null) {
    return (
      <h1>
        Faltan {targetSeconds - elapsedSeconds}
      </h1>
    )
  }

  return (
    <>
      <Countdown
        parseForm={parseForm}
      />
    </>
  )
}

export default App
