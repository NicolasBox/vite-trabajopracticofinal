import React from "react";
import { ReactDOM } from "react";
import { Text, Image, Heading, Box, Center } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
function Habilidad({titulo, texto, imagen}){
    return(
      <Box>
      <Card maxW='md' >
  <CardHeader>
        <Box>
          <Heading size='sm'textAlign={"Center"} >{titulo}</Heading>
        </Box>
        
  </CardHeader>
  <CardBody>
    <Text>
      {texto}
    </Text>
  </CardBody>
  <Image

    src={imagen}
    alt='Chakra UI'
    boxSize='100px'
    pl={"-10%"}
    pr={"-20%"}
    ml={"40%"}
      
    mb={"6%"}
  />

  
  </Card>
</Box>
  )
  }
  export{Habilidad}