import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard';

export const ThoughtList = ( {thoughtList} ) => {
  const list = thoughtList.map(thought => {
    if (thoughtList.length == 0) {
      return (
        <section>You have no thoughts</section>
      )
    }
    return (
      <ThoughtCard thought = {thought}/>
    )
  })

  return (
    <section className='thoughtList'>
      {list}
    </section>
  )
}
