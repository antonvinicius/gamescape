import { TextDisplay } from "@components/TextDisplay";
import { FlatList, View } from "react-native";
import { Game, AddIcon } from "./styles";
import { Button } from "@components/Button";
import { Spacer } from "@components/Spacer";

type Props = {
  games: string[]
  onAddGame: () => void,
  onGameTap: () => void
}

export function GamesList({ games, onAddGame, onGameTap }: Props) {
  const isListEmpty = games.length === 0

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
      ListEmptyComponent={() => (
        <View>
          <TextDisplay center>
            Nenhum jogo cadastrado. {'\n'}
            Experimente cadastrar agora mesmo.
          </TextDisplay>
          <Spacer bottom={10} />
          <Button onPress={onAddGame}>Cadastrar Game</Button>
        </View>
      )}
      contentContainerStyle={isListEmpty ? { flex: 1, justifyContent: 'center', alignItems: 'center' } : null}
    />
  )
}