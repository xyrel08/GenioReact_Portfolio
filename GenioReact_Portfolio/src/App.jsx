
import styles from './App.module.css'
import { Navbar } from './components/navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/about/about'

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
     <About></About>
    </div>
  )
}

export default App
