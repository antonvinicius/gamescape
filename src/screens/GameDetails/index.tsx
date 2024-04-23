import { Header } from "@components/Header";
import { ScreenContainer } from "@components/ScreenContainer";
import { Border, Container, HeaderContainer, LastRow, MainSection, Row, RowItem, Title } from "./styles";
import { Spacer } from "@components/Spacer";
import { TextDisplay } from "@components/TextDisplay";
import { CheckFat, Heart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { View } from "react-native";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Game, GameStatus } from "src/storage/games/Game";
import { gameGetByName } from "src/storage/games/gameGetByName";
import { throwable } from "@utils/errorHandler";
import { gameRemove } from "src/storage/games/gameRemove";

type Params = {
  name: string
}

export function GameDetails() {
  const theme = useTheme()
  const navigation = useNavigation()
  const { name } = useRoute().params as Params
  const [game, setGame] = useState({} as Game)

  async function fetchGame() {
    throwable(async () => {
      setGame(await gameGetByName(name))
    })
  }

  async function removeGame() {
    await gameRemove(game)
    navigation.goBack()
  }

  useEffect(() => {
    fetchGame()
  }, [])

  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Spacer bottom={100} />
        <Title>{game.name}</Title>
        <Border />
        <Spacer
          bottom={168}
        />
      </HeaderContainer>

      <MainSection>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Row>
            <RowItem>
              <TextDisplay weight='bold' center>{game.genre}</TextDisplay>
              <TextDisplay center>Gênero</TextDisplay>
            </RowItem>

            <RowItem>
              <TextDisplay weight='bold' center>{game.platform}</TextDisplay>
              <TextDisplay center>Plataforma</TextDisplay>
            </RowItem>
          </Row>

          <Spacer bottom={55} />

          <LastRow>
            {game.status === GameStatus.WISH ? (
              <Heart
                size={52}
                color={theme.COLORS.PRIMARY}
                weight='fill'
              />
            ) : (
              <CheckFat
                size={52}
                color={theme.COLORS.PRIMARY}
                weight='fill'
              />
            )}
            <TextDisplay center>
              {game.status === GameStatus.OWNED && 'Já possuo'}
              {game.status === GameStatus.WISH && 'Lista de Desejos'}
            </TextDisplay>
          </LastRow>
        </View>
      </MainSection>

      <View style={{ padding: 20 }}>
        <Button onPress={removeGame}>Remover</Button>
      </View>
    </Container>
  )
}