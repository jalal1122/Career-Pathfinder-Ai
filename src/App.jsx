import './App.css'
import AiSuggestionsSection from './Components/AiSuggestionsSection'
import HeroSection from './Components/HeroSection'
import InputFormSection from './Components/InputFormSection'

function App() {
  // 

  return (
    <>
      <HeroSection />
      <div name="inputFormSection">
      <InputFormSection />
      </div>
      <div name="aiSuggestionsSection">
        <AiSuggestionsSection />
        </div>
    </>
  )
}

export default App
