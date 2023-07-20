
import './App.css'
import { Proyectos } from './components/Proyectos/Proyectos.jsx';
import { Acerca } from './components/Acerca/Acerca.jsx';
import { Habilidades } from './components/Habilidades/Habilidades.jsx';
import { Contacto } from './components/Contacto/Contacto.jsx';
import { Hero } from './components/Hero/hero.jsx';


function App() {
 
  return (
    <>
    <Hero/>
    <Acerca/>
    <Proyectos/> 
    <Habilidades/>
    <Contacto/> 
    </>
    )
  }
  
  

export default App
