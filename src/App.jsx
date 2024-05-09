import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

import Form from "./components/RegistationForm/Form";
import Success from "./components/RegistationForm/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
