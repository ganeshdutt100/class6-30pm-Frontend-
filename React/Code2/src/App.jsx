
import './App.css'
import HeroSectioin from './components/HeroSectioin'
import Navbar from './components/Navbar'
import './output.css'


function App() {
let title  = "authentic tumeric truffaut "
let title1  = "Copper mug try-hard pitchfork  "
let title2  = "mlkshk tote bag selvage  "

  return (
    <>

  <Navbar/> 
  <HeroSectioin heading={title}/>
  <HeroSectioin heading={title1}/>
  <HeroSectioin  />
 

    </>
  )
}

export default App
