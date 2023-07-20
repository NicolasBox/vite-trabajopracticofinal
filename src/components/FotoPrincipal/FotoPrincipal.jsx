import React from "react"
import { Box,Image } from "@chakra-ui/react"
function FotoPrincipal(){
    return(
        <Image w={{base:"100%", lg:"100%"}} h={{base:"auto", lg:'100vh'}}  mr={{base:"0",lg:"3%"}} src='../nico.jpeg' alt='Nicolas' display={{ lg: "block" }}/>
    )
}
export{FotoPrincipal}

