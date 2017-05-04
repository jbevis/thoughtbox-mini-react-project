import React from 'react';

export const ThoughtCard = ({ thought }) => {
  return (
    <article className='thoughtCard'>
      <p className="title">{thought.title}</p>
      <p className="body">{thought.body}</p>
    </article>
  )
}
