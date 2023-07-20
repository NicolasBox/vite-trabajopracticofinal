import React, { useRef }  from "react";
import { ReactDOM } from "react";
import { Box, Text,Stack,Image, Flex,Button} from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { Navbar2 } from "../Navbarr/Navbar2";

import emailjs from '@emailjs/browser';
import { RedesBlancas } from "../Redes/RedesBlancas";

function Contacto(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yr4ohge', 'template_vpkyk5n', form.current, 'lV6nqup42hiU-rpGX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
          
        <Box h="100vh"  ml={{ base: "3%", lg: "3%" }} mr={{ base: "3%", lg: "3%" }} pl={{ base: "0", lg: "3%" }} pb={{ base: "0", lg: "3%" }}  bg='rgb(33, 40,50)' id="contacto" >
            <RedesBlancas/>
        <Text fontSize={{base:"30",lg:"40"}} ml={{ base: "0", lg: "5%" }} mt={{base:"15%",lg:"0"}} color={"red"}><span>Conectate conmigo.</span> </Text>
        <Flex direction={{ base: "column", lg: "row" }} justifyContent={{ base: "center", lg: "space-between" }} mb={{ base: "10%", lg: "12%" }}>
        <Stack  ml={{ base: "0", lg: "5%" }} spacing={4} w={{ base: "80%", lg: "50%" }} >
        <form ref={form} onSubmit={sendEmail}> 
         <Input variant='flushed' placeholder='Nombre'color={"white"} type="text" name="user_name" />
         <Input variant='flushed' placeholder='E-mail' color={"white"} type="email" name="user_email" />
         <Input variant='flushed' placeholder='Mensage' color={"white"} name="user_email" />
         <Button variant="solid" rounded="full" borderRadius={"full"} size={"md"} colorScheme='red' type="submit" ml={{ base: "50%", lg: "88%" }} mt={{ base: "5%", lg: "10%" }} > Enviar </Button>
        </form>

        </Stack>
        <Image src= './nerd.png' alt='Green double couch with wooden legs'
           borderRadius='lg'mt={{ base: "5%", lg: "0" }} w={{ base: "80%", lg: "auto" }} />
        </Flex>
       <Navbar2/>
       
        </Box>


    )
}
export{Contacto}