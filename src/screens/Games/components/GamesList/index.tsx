import { TextDisplay } from "@components/TextDisplay";
import { FlatList } from "react-native";
import { Game, AddIcon } from "./styles";

type Props = {
  games: string[]
}

export function GamesList({ games }: Props) {
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
          <Game isEmpty={false}>
            <AddIcon />
          </Game>
        ) : (
          <Game isEmpty>
            <TextDisplay center>{item}</TextDisplay>
          </Game>
        )
      )}
    />
  )
}