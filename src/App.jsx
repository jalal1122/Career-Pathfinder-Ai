import "./App.css";
import AiSuggestionsSection from "./Components/AiSuggestionsSection";
import Footer from "./Components/Footer.jsx";
import HeroSection from "./Components/HeroSection";
import InputFormSection from "./Components/InputFormSection";
import { useState } from "react";

function App() {
  const [isDataAvailable, setIsDataAvailable] = useState(false);

  const [isLoading, setisLoading] = useState(false);

  const handleLoading = (bool) => {
    setisLoading(bool);
  }

  const handleDataAvailability = (bool) => {
    setIsDataAvailable(bool);
  };

  return (
    <>
      <HeroSection />
      <div name="inputFormSection">
        <InputFormSection handleDataAvailability = {handleDataAvailability} handleLoading = {handleLoading}/>
      </div>
      <div name="aiSuggestionsSection">
        <AiSuggestionsSection isDataAvailable = {isDataAvailable} isLoading = {isLoading} handleLoading = {handleLoading}/>
      </div>
      <Footer />
    </>
  );
}

export default App;
