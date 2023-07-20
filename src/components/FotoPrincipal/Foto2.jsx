import React from "react"
import { Box,Image } from "@chakra-ui/react"

function Foto2(){
    return(
        <Image w={{ base: "94%", lg: "36%" }} h={{ base: "auto", lg: "56.25rem" }}  mr={{ base: "0%", lg: "3%" }} mt={{base:"-88%", lg:"0"}}  src='foto2.jpeg' alt='Nicolas' objectFit={"cover"}
         display={{ lg: "block" }} />
    )
}
export{Foto2}
