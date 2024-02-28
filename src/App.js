import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      mesg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#356c9d";
      showAlert("Dark mode hase been enabled", "Success");
      document.title = "MyApp - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode hase been enebaled", "Success");
      document.title = "MyApp - Light mode";
    }
  };

  return (
    <>
    {/* <Router> */}
    <Navbar
        title="Text Utility"
        about="About"
        text="TextUtility"
        mode={mode}
        togleMode={togleMode}
      />
      <Alert alert={alert}/>
  
      
      {/* <Routes> */}
        
      
         {/* <Route path="/About" ele ment={<About />} /> */}
         {/* <Route path="/TextForm" element={} /> */}
         <TextForm showAlert={showAlert} heading="Enter your text" mode={mode} />


    {/* </Routes> */}
    {/* </Router> */}
    </>
  );
}

export default App;
