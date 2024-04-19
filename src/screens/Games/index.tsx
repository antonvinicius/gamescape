import { ScreenContainer } from "@components/ScreenContainer";
import { Logo } from "./styles";
import { Input } from "@components/Input";
import { Spacer } from "@components/Spacer";
import { GamesList } from "./components/GamesList";
import { useNavigation } from "@react-navigation/native";

export function Games() {
  const games = ['Batman: Arhkam Asylum 2', 'spider-man 2', 'plus']
  const navigation = useNavigation()

  function handleAddGame() {
    navigation.navigate('NewGame')
  }

  function handleGameTap() {
    navigation.navigate('GameDetails')
  }

  return (
    <ScreenContainer>
      <Logo />
      <Spacer bottom={53} />
      <Input placeholder="Pesquise por um game..." />
      <Spacer bottom={20} />

      <GamesList
        games={games}
        onAddGame={handleAddGame}
        onGameTap={handleGameTap}
      />
    </ScreenContainer>
  )
}