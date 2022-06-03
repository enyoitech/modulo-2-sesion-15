import { useState } from 'react'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './Components/Home';
import { Pagina1 } from './Components/Pagina1';
import { Pagina2 } from './Components/Pagina2';
import { Login } from './Components/Login';
import { DetallePage1 } from './Components/DetallePage1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/page1" element={<Pagina1 />} />
         <Route path="/page2" element={<Pagina2 />} />
         <Route path="/login" element={<Login />} />
         <Route path="/detalle/:id" element={<DetallePage1 />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
