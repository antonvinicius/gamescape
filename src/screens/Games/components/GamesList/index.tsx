import { TextDisplay } from "@components/TextDisplay";
import { FlatList } from "react-native";
import { Game, AddIcon } from "./styles";

type Props = {
  games: string[]
  onAddGame: () => void,
  onGameTap: () => void
}

export function GamesList({ games, onAddGame, onGameTap }: Props) {
  return (
    <FlatList
      numColumns={2}
      data={games}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        marginBottom: 15
      }}
      renderItem={({ item }) => (
        item === 'plus' ? (
          <Game isEmpty={false} onPress={onAddGame}>
            <AddIcon />
          </Game>
        ) : (
          <Game isEmpty onPress={onGameTap}>
            <TextDisplay center>{item}</TextDisplay>
          </Game>
        )
      )}
    />
  )
}