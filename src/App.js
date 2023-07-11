import "./App.css";
import Container from "./../node_modules/react-bootstrap/esm/Container";
import Register from "./Pages/register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbarall from './components/navbar/Navbarall'
import Footercomp from "./components/footer/Footer";
import Loginpage from "./Pages/register/loginpage";
import HomePage from "./Pages/homepage.js/HomePage";

function App() {
  return (
    <div className="funtuApp">
      <BrowserRouter>
        <Navbarall />
        <Container className='mt-1'>
          <Routes>
            <Route path="/" element={<Loginpage />}></Route>
            <Route path="/Registerpage" element={<Register />}></Route>
            <Route path="/Homepage" element={<HomePage />}></Route>
          </Routes>

        </Container>
        <Footercomp />
      </BrowserRouter>

    </div>

  );
}

export default App;
