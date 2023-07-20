import React, { useState } from "react";
import { Box,Button,Text, Flex} from '@chakra-ui/react';
import { Proyecto } from "./Proyecto";
import { RedesBlancas } from "../Redes/RedesBlancas";
import { Navbar2 } from "../Navbarr/Navbar2";
const listaProyectos=[ 
  { 
    id:1,
    imagen:' proyecto1.jpeg',
    titulo: 'Proyecto Nro. 1',
    texto:'Lorem ipsum dolor sit amet consectetur,  maiores reprehenderit porro nulla rem quae laudantium!'
},
{
  id:2,
  imagen: 'proyecto2.jpeg',
  titulo: 'Proyecto Nro. 2',
  texto: 'Lorem ipsum dolor sit amet consectetur,  maiores reprehenderit porro nulla rem quae laudantium!'
   },
{
  id:3,
  imagen: 'proyecto3.jpeg',
  titulo: 'Proyecto Nro. 3',
  texto: 'Lorem ipsum dolor sit amet consectetur,  maiores reprehenderit porro nulla rem quae laudantium!'
  }
]

function Proyectos(){

const[tarjetaActual,setTarjetaActual]=useState(0)
const cantidad=listaProyectos.length
const siguienteTarjeta =()=>{
setTarjetaActual(tarjetaActual=== cantidad-1?
  0:tarjetaActual+1)
}
  const anteriorTarjeta =()=>{
    setTarjetaActual(tarjetaActual=== 0? cantidad-1
      :tarjetaActual-1)
}

    return(
      < Box h={"100vh"} ml={"3%"} mr={"3%"} pl={"3%"} pb={{ base: "0", lg: "15%" }} pt={"1%"} pr={"3%"}  bg='rgb(33, 40,50)' id="proyectos" >
      <RedesBlancas/>
         <Text ml={"5%"} fontSize={"40"} color={"red"}> Proyectos</Text>
         <Box 
          h={{base:"auto",lg:"100%"}}
          w={"100%"}
          pt={{base:"0",lg:"180px"}}
          pb={{base:"0%",lg:"42px"}}
          >
          <Flex alignItems={"center"}
          justify={"space-between"}
          > 
      <Button onClick={anteriorTarjeta}>← </Button> <Box>  
     {listaProyectos.map((proyecto,index)=>{
      return(<Box key={proyecto.id}>  {tarjetaActual===index &&
     (<Proyecto titulo={proyecto.titulo} texto={proyecto.texto} imagen={proyecto.imagen}/>)}  </Box>)
     
        }
     )}</Box> 
    <Button onClick={siguienteTarjeta}>→ </Button>
     </Flex></Box>
    
    <Navbar2/>
   </Box>
    )}
export {Proyectos}