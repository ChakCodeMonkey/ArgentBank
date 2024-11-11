import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Head.jsx"
import Home from "./pages/Home.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App