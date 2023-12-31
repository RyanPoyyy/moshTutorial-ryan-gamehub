import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeader from "./components/GameHeader";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedSortOrder, setSelectedSortOrder] = useState<string | null>(
    null
  );

  const [SearchText, setSearchText] = useState<string | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //for mobile devices
        lg: `"nav nav" "aside main"`, //for >1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setSearchText(searchText)} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeader
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        ></GameHeader>
        <HStack paddingLeft={3} spacing={5} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          ></PlatformSelector>

          <SortSelector
            selectedSortOrder={selectedSortOrder}
            onSelectSortOrder={(sortOrder) => setSelectedSortOrder(sortOrder)}
          ></SortSelector>
        </HStack>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          selectedSortOrder={selectedSortOrder}
          searchText={SearchText}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
