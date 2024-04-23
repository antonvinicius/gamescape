import { ScreenContainer } from "@components/ScreenContainer";
import { Logo } from "./styles";
import { Input } from "@components/Input";
import { Spacer } from "@components/Spacer";
import { GamesList } from "./components/GamesList";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";
import { gameGet } from "src/storage/games/gameGet";
import { Game, GameStatus } from "src/storage/games/Game";

export function Games() {
  const navigation = useNavigation()
  const [searchField, setSearchField] = useState('')
  const [games, setGames] = useState<Game[]>([])

  const filteredItems = searchField.length > 2 ? games.filter(game => game.name.toLowerCase().includes(searchField.toLowerCase())) : games

  function handleAddGame() {
    navigation.navigate('NewGame')
  }

  function handleGameTap(game: Game) {
    navigation.navigate('GameDetails', { name: game.name })
    setTimeout(() => {
      setSearchField('')
    }, 300)
  }

  async function fetchGames() {
    const games = await gameGet()
    if (games.length > 0) {
      setGames([...games, {
        name: 'plus',
        genre: '',
        platform: '',
        status: GameStatus.OWNED
      }])
    } else {
      setGames([])
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGames()
    }, [])
  );

  console.log('oi')
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