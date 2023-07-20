import React from "react";
import { ReactDOM } from "react";
import { Card,CardBody,CardFooter } from "@chakra-ui/react";
import { Image,Heading,Text,Button,Stack } from "@chakra-ui/react";
function Proyecto({titulo, texto, imagen}){
    return(
        <>
        
        <Card
            title={titulo}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            w={{base:"80%",lg:"80%"}}
            ml={"10%"}
        
        >
        <Image
            maxW={{ base: '100%', sm: '40%' }}
            src={imagen}
            alt='Caffe Latte' 
            boxSize={"300px"}
            objectFit={"cover"}
        />
      <Stack>
        <CardBody>
           <Heading size='sm'>{titulo}</Heading>
           <Text py='2'>
            {texto}
           </Text>
        </CardBody>
        <CardFooter>
           <Button variant='solid' colorScheme='blue'>
            Ver mas
           </Button>
        </CardFooter>
      </Stack>
    </Card>
        
        </>
    )
}
export {Proyecto}