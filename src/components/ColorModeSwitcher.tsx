import { Switch, Text, HStack, useColorMode } from "@chakra-ui/react";

const ColorModeSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? "Dark" : "Light"} Mode{" "}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitcher;
