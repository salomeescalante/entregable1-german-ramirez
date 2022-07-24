import React from 'react'

const CardQuotes = ({randomQuote, randomColors, getRandomAll}) => {

  console.log(randomQuote);

  const objectStyle = {

    color: randomColors
  }

  const objectBtnStyle = {
    backgroundColor: randomColors 
  }

  return (

    <article className='card' style={objectStyle}>
        <div className='card__container'>
        
        
        <h2 className='card__item'>{`${randomQuote.quote}`}</h2>
        <h3 className='author'>{`${randomQuote.author}`}</h3>
        <button onClick={getRandomAll} className='card__btn' style={objectBtnStyle}>&#62;</button>
        </div>
    </article>
  )
}

export default CardQuotes