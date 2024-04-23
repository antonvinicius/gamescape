import { ScreenContainer } from "@components/ScreenContainer";
import { Logo } from "./styles";
import { Input } from "@components/Input";
import { Spacer } from "@components/Spacer";
import { GamesList } from "./components/GamesList";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function Games() {
  const navigation = useNavigation()
  const [searchField, setSearchField] = useState('')
  const [games, setGames] = useState(['Batman: Arhkam Asylum 2', 'spider-man 2', 'plus'])

  const filteredItems = searchField.length > 2 ? games.filter(game => game.toLowerCase().includes(searchField.toLowerCase())) : games

  function handleAddGame() {
    navigation.navigate('NewGame')
  }

  function handleGameTap(name: string) {
    navigation.navigate('GameDetails', { name })
    setInterval(() => {
      setSearchField('')
    }, 300)
  }

  return (
    <ScreenContainer>
      <Logo />
      <Spacer bottom={53} />
      <Input
        placeholder="Pesquise por um game..."
        value={searchField}
        onChangeText={setSearchField}
      />
      <Spacer bottom={20} />

      <GamesList
        isEmpty={games.length === 0}
        games={filteredItems}
        onAddGame={handleAddGame}
        onGameTap={handleGameTap}
      />
    </ScreenContainer>
  )
}