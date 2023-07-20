import React from "react";
import { Flex, Link, Box,Image } from "@chakra-ui/react";

function RedesBlancas() {
  return (
    <Flex
    
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      color="black"
      marginLeft={{base:"10%" ,lg:"60"}}
    
    >
      
        <Link href="https://www.instagram.com/nico.gregorio19/" mr={1}>
        <img  height="15px"width="15px"  color="white"src="../instagramblanc2.png"  alt="" />
        </Link>
      
        <Link href="https://www.linkedin.com/in/warbankai-eiem-a136a318a/" mr="4">
        <img  height="15px"width="15px" color="white" src="../linkedin2.png"  alt="" />
        </Link>
       
        <Link href="https://www.twitter.com" mr="4">
        <img  height="15px"width="15px" src="../twitter2.png"  alt="" />
        </Link> 
        <Link href="https://www.facebook.com/nico.gregorio.7/" mr="4">
        <img  height="15px"width="15px" src="../facebook2.png"  alt="" />
        </Link>
        <Link href="https://outlook.live.com/owa/">
        <img  height="15px"width="15px" src="../correo2.png"  alt="" />
        </Link>
      
    </Flex>
  );
}


export { RedesBlancas}