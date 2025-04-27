import "./App.css";
import Footer from "./Components/Footer.jsx";
import HeroSection from "./Components/HeroSection";
import { useState } from "react";
import InputFormSection from "./Components/InputFormSection.jsx";
import AiSuggestionsSection from "./Components/AiSuggestionsSection.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isDataAvailable, setIsDataAvailable] = useState(false);

  const handleDataAvailability = (bool) => {
    setIsDataAvailable(bool);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route
            path="/inputFormSection"
            element={
              <>
                <InputFormSection
                  handleDataAvailability={handleDataAvailability}
                />
              </>
            }
          />
          <Route
            path="/aiSuggestionsSection"
            element={
              <>
                <AiSuggestionsSection isDataAvailable={isDataAvailable} />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
