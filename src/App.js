import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./components/Inicio/Inicio.jsx";
import Contacto from "./components/Contacto/Contacto.jsx";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='Inicio' element={<Inicio />} />
      <Route path='Contacto' element={<Contacto />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
