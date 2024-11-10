import React from 'react'
import styles from './Hero.module.css'
import {getImageUrl} from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
            Hello I'm Xyrel Genio!    
            </h1>
            <p className={styles.desc}>
              I am an aspiring software developer. This is my portfolio showcasing my projects and skills and experience.
            </p>
            <a href="mailto:xyrelgenio08@gmail.com" className={styles.contact}>Contact Me</a>
            <img src={getImageUrl('hero/heroImage.png')}alt='Image of Me' className={styles.image}></img>
        </div>
        <div className={styles.top}>

        </div>
        <div className={styles.bottom}>

        </div>
    </section>
  )
}
