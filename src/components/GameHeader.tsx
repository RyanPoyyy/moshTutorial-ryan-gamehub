import { Heading } from "@chakra-ui/react";
import React from "react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  //   selectedSortOrder: string | null;
  //   searchText: string | null;
}

const GameHeader = ({
  selectedGenre,
  selectedPlatform,
}: //   selectedSortOrder,
//   searchText,
Props) => {
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeader;
