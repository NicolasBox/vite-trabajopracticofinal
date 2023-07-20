import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";
import { Redes } from "../Redes/Redes";
import { Navbar } from "../Navbarr/Navbar";
import { FotoPrincipal } from "../FotoPrincipal/FotoPrincipal";

function Hero() {
    return(
    <>
      <Flex align="center" direction={{ base: "column", lg: "row" }} w={{base:"100%", lg:"100%"}} >
        <Box
          color="black"
          bg="rgb(221,221,221)"
          pl={10}
          pr={{ base: "0", lg: "19%" }}
          ml={{ base: "0", lg: "3%" }}
          h={{base:"100%", lg:"100vh"}}
          w={{base:"100%", lg:"100%"}}
          id="hero"
          ID="inicio"
        >
          <Redes />
          <Flex 
            alignItems="center"
            justifyContent={{ base: "center", lg: "space-between" }}
            pb={{base:"0", lg:"40%"}}
            >
            <Text
                fontSize={40} 
                mt={{ base: "10%", lg: "40%" }}
                ml={{ base: "0", lg: "10%" }}
        
            >
            Hola <br />mi nombre es,
            Nicolas Gregorio <br /> 
            Soy <Text as="span" color="red">Developer Full Stack</Text>
            </Text>

            </Flex>
         
          <Navbar />
        </Box> 
        <FotoPrincipal/>
      </Flex>
    </>
  );
}

export { Hero }; 
