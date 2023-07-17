import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/macdonald-logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="100px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
