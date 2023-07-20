 import React from "react"
 import { HamburgerIcon } from "@chakra-ui/icons"
 import { IconButton, Link } from "@chakra-ui/react"
 import { useMediaQuery } from '@chakra-ui/react'
 import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
 function Hamburguesa(){
    return(
 <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    display={{base:"flex", lg:"none"}}
  
    />
  <MenuList >
    <MenuItem  as= {Link} href="#inicio">
      Inicio
    </MenuItem>
    <MenuItem as= {Link} href="#acerca" >
      Acerca
    </MenuItem>
    <MenuItem as= {Link} href="#proyectos">
      Proyectos
    </MenuItem>
    <MenuItem as= {Link} href="#habilidades">
     Habilidades
    </MenuItem>
    <MenuItem as= {Link} href="#contacto">
    Contacto
    </MenuItem>
  </MenuList>

</Menu>

    )
 }

 export{Hamburguesa};