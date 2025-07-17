
import './App.css'
import './output.css'
import Card from './components/Card'

function App() {

let details1 = "I am a student of FS"
let details2 = "I am a student of DA"
let details3 = "I am a student DS"
  return (
    <>
   <Card name="Ganesh Dutt" details={details1} />
   <Card name="Kartik" details={details3} />
   <Card name="Shubham" details={details2} />
 
  
    </>
  )
}

export default App
