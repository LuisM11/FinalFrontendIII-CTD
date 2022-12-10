
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from "./Routes/Home"
import { ContextProvider } from "./Components/utils/global.context";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact"

function App() {
  return (
    
    <ContextProvider class>
    <Navbar/>
    <Routes>
      <Route path="/" > 
        <Route index element={<Navigate to="/home" />}/>
      </Route>
      <Route path="/home" element={ 
        <Home /> 
      }/>
      <Route path="/dentist/:id" element={
        <Detail/>
      }/>
      <Route path="/contact" element={
        <Contact/>
      }/>
      <Route path="/favs" element={
         <Favs/>
      }/>
    </Routes>
    <Footer/> 
  </ContextProvider>
  );
}

export default App;
