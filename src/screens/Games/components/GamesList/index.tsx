import { TextDisplay } from "@components/TextDisplay";
import { FlatList, View } from "react-native";
import { Game, AddIcon } from "./styles";
import { Button } from "@components/Button";
import { Spacer } from "@components/Spacer";

type Props = {
  games: string[],
  isEmpty: boolean,
  onAddGame: () => void,
  onGameTap: (name: string) => void
}

export function GamesList({ games, onAddGame, onGameTap, isEmpty }: Props) {
  const isListEmpty = games.length === 0 && isEmpty
  const searchNotFound = !isEmpty && games.length === 0

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
          <Game isEmpty onPress={() => onGameTap(item)}>
            <TextDisplay center>{item}</TextDisplay>
          </Game>
        )
      )}
      ListEmptyComponent={() => (
        <View>
          {isListEmpty && (
            <>
              <TextDisplay center>
                Nenhum jogo cadastrado. {'\n'}
                Experimente cadastrar agora mesmo.
              </TextDisplay>
              <Spacer bottom={10} />
              <Button onPress={onAddGame}>Cadastrar Game</Button>
            </>
          )}
          {searchNotFound && (
            <TextDisplay center>
              Nenhum jogo encontrado {'\n'}
              com esta busca.
            </TextDisplay>
          )}
        </View>
      )}
      keyboardShouldPersistTaps='always'
      contentContainerStyle={isListEmpty || searchNotFound ? { flex: 1, justifyContent: 'center', alignItems: 'center' } : null}
    />
  )
}