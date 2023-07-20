import React from "react";
import { ReactDOM } from "react";
import { Flex, Box } from '@chakra-ui/react'
import { Image,Text,Stack,Heading,Button } from "@chakra-ui/react";
import { useState } from "react";
import { RedesBlancas } from "../Redes/RedesBlancas";
import { Navbar2 } from "../Navbarr/Navbar2";
import{Habilidad}from "./Habilidad"
const listaHabilidades=[ 
  { 
    id:1,
    imagen:' css2.png',
    titulo: 'CSS. ',
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad mollitia deleniti cumque dignissimos? Corporis, distinctio ullam. Iure, doloremque sequi maiores iste laborum cumque dolorum magni."
},
{
  id:2,
  imagen: 'html.png',
  titulo: 'HTML.',
  texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad mollitia deleniti cumque dignissimos? Corporis, distinctio ullam. Iure, doloremque sequi maiores iste laborum cumque dolorum magni."
   },
{
  id:3,
  imagen: 'javascrip.png',
  titulo: 'JavaScript.',
  texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad mollitia deleniti cumque dignissimos? Corporis, distinctio ullam. Iure, doloremque sequi maiores iste laborum cumque dolorum magni."
  }
]
function Habilidades(){
  
const [habilidadActual,setHabilidadActual]=useState(0)
const cantidad=listaHabilidades.length
const siguienteHabilidad =()=>{
setHabilidadActual(habilidadActual=== cantidad-1?
  0:habilidadActual+1)
}
  const anteriorHabilidad =()=> {
    setHabilidadActual(habilidadActual=== 0? cantidad-1
      :habilidadActual-1)
}

    return(
      < Box h={"100vh"} ml={"3%"} mr={"3%"} pl={"3%"} pt={"1%"} pr={"3%"} bg='rgb(33, 40,50)' width={"auto"} id="habilidades">
        <RedesBlancas/>
         <Text ml={"10%"} fontSize={"40"} color={"red"} mt={{base:"30%",lg:"9%"}} > Habilidades</Text>
         <Box 
          w={"100%"}
          h={"100%"}
          pt={{ base: "20%", lg: "10%" }}
          mb={{ base: "-70%", lg: "-16%" }}
          mt={{ base: "-15%", lg: "-9%" }}
        >
       <Flex alignItems={"center"}
          justify={"space-between"} 
          mb={{base:"0",lg:"12%"}}
          mt={{base:"10%",lg:"0"}}
          pl={{base:"3%",lg:"3%"}}
        
          > 
      <Button onClick={anteriorHabilidad}>← </Button> <Box>
        {listaHabilidades.map((proyecto,index)=> {
        return(<Box key={proyecto.id}>  {habilidadActual===index &&
        (<Habilidad titulo={proyecto.titulo} texto={proyecto.texto} imagen={proyecto.imagen}/>)}  </Box>)
        }      
        )}</Box>
     
        
     <Button onClick={siguienteHabilidad}>→ </Button>
     </Flex>
     </Box>
    
    <Navbar2/>
   </Box>
    )}

export{Habilidades}