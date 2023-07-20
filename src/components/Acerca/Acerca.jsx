import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import { Redes } from "../Redes/Redes";
import { Navbar } from "../Navbarr/Navbar";
import { Foto2 } from "../FotoPrincipal/Foto2";


function Acerca() {
  return (
    <>
      <Flex align="center" direction={{ base: "column", lg: "row" }} >
        <Box
          color="black"
          bg="rgb(221,221,221)"
          pl={10}
          ml={{ base: "0", lg: "3%" }}
          h={"100vh"}
          w={{ base: "100%", lg: "58.5%" }}
          id="acerca"
          pr={{ base: "0", lg: "19%" }}
          pb={{ base: "30%", lg: "53.1%" }}
          
        >
          <Redes />
          <Flex 
            alignItems="center"
            pb={{base:"0", lg:"20%"}}
          
          >
            <Text h={350} as="span" fontSize={40} color="red"  mt={{ base: "10%", lg: "40%" }} ml={{ base: "0", lg: "10%" }}>
              Acerca de mi
              <Text color={"black"} fontSize={15} >
                Mi nombre es Nicolas Emanuel Gregorio tengo 26 años soy de
                Córdoba, Argentina. Soy proactivo y muy creativo, y también soy
                jugador del juego "League of Legends" (LOL), donde estuve entre
                los 50 mejores jugadores de Argentina y los 300 mejores del
                mundo. Estudié en la Universidad Tecnológica Nacional Facultad
                Regional Córdoba 2 años Ingeniería en Sistemas de Información y
                2 años Ingeniería Industrial. También tengo una Tecnicatura en
                Gestión contable y Financiera de la Universidad IES Siglo XXI.
              </Text>
            </Text>
          </Flex>

          <Navbar />
        </Box>
        <Foto2 /> 
      </Flex>
    </>
  );
}

export { Acerca };
