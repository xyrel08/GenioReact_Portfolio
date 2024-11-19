import React from 'react'
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section>
    <h2>
        Hello
    </h2>
    <div>
        <img src={getImageUrl("genio1.jpg")}></img>
    </div>
    </section>
  )
}
