import React, { useContext, useState } from 'react'
import { Context } from './index'
import Review from './review'
import Reply from './reply'
import data from '../static/data.json'

const reviewSection = () => {
  const { id } = useContext(Context)
  const {place, rating, content, author, published_at} = data.filter(r => r.id === id)[0]
  
  return (
    <div className='review-container'>
      <Review
        place={place}
        rating={rating}
        content={content}
        author={author}
        published_at={published_at}
      />
      <Reply text={content} author={author} date={published_at} />
    </div>
  )
}

export default reviewSection