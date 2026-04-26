import {Routes, Route } from "react-router";
import  {Home}   from "./pages/Home";
import {Registation} from "./pages/Registation"
import {Login} from "./pages/Login"
import  {MainLayout}  from "./Components/Layout/MainLayout";
function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>  
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registation" element={<Registation />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
