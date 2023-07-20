import React from "react";
import { Flex, Link, Box,Image } from "@chakra-ui/react";

function Redes() {
  return (
    <Flex
    w={{ base: "100%", lg: "auto" }}
      as="nav"
      align="center"
      justify={{ base: "center", lg: "space-between" }}
      padding="1rem"
      marginTop={6}
      color="black"
      marginLeft={{base:"0", lg:"60"}}

    >
      
        <Link href="https://www.instagram.com/nico.gregorio19/" mr={1}>
        <img  height="15px"width="15px" src="../instagram.svg"  alt="" />
        </Link>
      
        <Link href="https://www.linkedin.com/in/warbankai-eiem-a136a318a/" mr="4">
        <img  height="15px"width="15px" src="../linkedin.png"  alt="" />
        </Link>
       
        <Link href="https://www.twitter.com" mr="4">
        <img  height="15px"width="15px" src="../twitter.svg"  alt="" />
        </Link> 
        <Link href="https://www.facebook.com/nico.gregorio.7/" mr="4">
        <img  height="15px"width="15px" src="../facebook.png"  alt="" />
        </Link>
        <Link href="https://outlook.live.com/owa/">
        <img  height="15px"width="15px" src="../correo.svg"  alt="" />
        </Link>
      
    </Flex>
  );
}


export { Redes }