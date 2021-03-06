import React, { useContext } from 'react'
import { Global } from '../index'
import Stars from '../stars'

const Card = ({ author, place, published_at, rating, content, id }) => {
  const { setId, setView } = useContext(Global)

  return (
    <div
      className='card'
      onClick={() => {
        setId(id)
        setView({ cards: 'hidden' })
      }}
    >
      <div className='card-title'>{place}</div>
      <div className='card-stars'>
        <Stars count={rating} />
      </div>
      <div className='card-text'>{content}</div>
      <div className='card-author-date-row'>
        <div className='card-author'>{author}</div>
        <div className='card-date'>{published_at}</div>
        <div className='comments-icon fa fa-msg' />
      </div>
    </div>
  )
}

export default Card
