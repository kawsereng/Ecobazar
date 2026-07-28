import {Routes, Route } from "react-router";
import  {Home}   from "./pages/Home";
import About from "./pages/About"
import {Registation} from "./pages/Registation"
import {Login} from "./pages/Login"
import {Forget}from "./pages/Forget"
import {Details} from "./pages/Details"
import  {MainLayout}  from "./Components/Layout/MainLayout";
import Contact from "./pages/Contact";
function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>  
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registation" element={<Registation />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Details" element={<Details/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
