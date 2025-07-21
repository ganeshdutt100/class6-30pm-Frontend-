
import './App.css'
import HeroSectioin from './components/HeroSectioin'
import Navbar from './components/Navbar'
import './output.css'


function App() {
let title  = "authentic tumeric truffaut "
let title1  = "Copper mug try-hard pitchfork  "
  return (
    <>

  <Navbar/> 
  <HeroSectioin heading={title}/>
  <HeroSectioin heading={title1}/>
  <HeroSectioin  />
  console.log("heading ", heading)
 

    </>
  )
}

export default App
