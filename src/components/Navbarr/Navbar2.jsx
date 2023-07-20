import React from "react";
import { Flex, Link, Box } from "@chakra-ui/react";

function Navbar2() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      pb={{base:"0", lg:"50"}}
      marginTop={30}
      marginLeft={{base:"0",lg:"30"}}
      paddingLeft={10}
      fontSize={{base:"9px",lg:"20px"}}
      marginRight={{base:"7%",lg:"0"}}
      color="white"
      w={"100%"}
      h={"6%"}
            
    >
      <Box  >
        <Link href="#inicio" mr={4}fontWeight="bold">
          Inicio
        </Link>
        <Link href="#acerca" mr="4"fontWeight="bold">
         Acerca de
        </Link>
        <Link href="#proyectos" mr="4"fontWeight="bold">
          Proyectos
        </Link> 
        <Link href="#habilidades"mr="4"fontWeight="bold">
         herramientas
        </Link>
        <Link href="#contacto" mr="4"fontWeight="bold">
          Contacto
          </Link>
      </Box>
    </Flex>
  );
}


export { Navbar2 }