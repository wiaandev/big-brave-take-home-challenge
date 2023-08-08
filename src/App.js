import "./Assets/base.scss";
import { Routes, Route } from "react-router-dom"; // using React Router Framework to enable client-side routing from page to page
import LandingPage from "./Pages/LandingPage/LandingPage";
import FormWizardPage from "./Pages/FormWizardPage/FormWizardPage";
import CharacterPage from "./Pages/CharacterPage/CharacterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/form" element={<FormWizardPage />}></Route>
      <Route path="/character" element={<CharacterPage />}></Route>
    </Routes>
  );
}

export default App;
