import React from "react";
import { Flex, Link, Box } from "@chakra-ui/react";
import { Hamburguesa } from "./Hamburguesa";

function Navbar() {
  return (
    <>
    <Box display={{ base: "block", lg: "none" }}>
    <Hamburguesa />
    </Box>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      marginTop={30}
      marginLeft={30}
      paddingLeft={10}
      marginRight={0}
      color="black"
      w={{ base: "0", lg: "600px" }} 
      h={"30px"}
      display={{ base: "none", lg: "flex" }}
    
    >
      <Box display={{ base: "none", lg: "block"}} >
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
          <Hamburguesa/>
      </Box>
    
    </Flex>
    </>
  );
}

export { Navbar }