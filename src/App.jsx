import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import CardQuotes from './components/CardQuotes'
import colors from './utils/colors'

function App() {
 
  const getRandomElement = Array => {
    const indexRandom = Math.floor(Math.random() * Array.length)
    return Array[indexRandom]
     
  }

  let quoteRandom = getRandomElement(quotes)
  let colorRandom = getRandomElement(colors)


  const [randomQuote, setRandomQuote] = useState(quoteRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)

 
  const objectStyle = {
    backgroundColor: randomColors
  }

  const getRandomAll = () => {

    quoteRandom = getRandomElement(quotes)
    colorRandom = getRandomElement(colors)

    setRandomQuote (quoteRandom)
    setRandomColors(colorRandom)

  }

  return (
    <div className="App" style={objectStyle}>
     <CardQuotes 
     randomQuote ={randomQuote}
     randomColors = {randomColors}
     getRandomAll = {getRandomAll}
   />
   {/* <i className="fa-solid fa-quote-left"></i> */}
   
    </div>

    
  )
}

export default App
