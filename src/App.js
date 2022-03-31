import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; 

import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";

function App() {
  return ( //router para navegación dinamica, por ejemplo al ir a una sección del sitio no existente me siga mostrando contenido
    <Router> 
      <div className="container">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark mt-5">Inicio</Link>
          <Link to="/nosotros" className="btn btn-dark mt-5">Nosotros</Link>
          <Link to="/contacto" className="btn btn-dark mt-5">Contacto</Link> 
        </div>
        <hr />

        <Routes>
          <Route path="/" element={<Inicio />} />  
          <Route path="/nosotros" element={<Nosotros />} />  
          <Route path="/contacto" element={<Contacto />} />  
            
      
        </Routes>

      </div>
    </Router> 
    //adentro del switch va a ir todo el contenido dinamico, se usa <Route path="/contacto" para que cuando el usuario accesa a esa ruta muestre ese mensaje 
 //en el switch se va declarando de lo mas especifico a lo mas general 
  );
}

export default App;
