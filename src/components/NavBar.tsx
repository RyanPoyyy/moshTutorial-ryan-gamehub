import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/steam-logo.png";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { SearchInput } from "./SearchInput";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="100px"></Image>
      <SearchInput />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
