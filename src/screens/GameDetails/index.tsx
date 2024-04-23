import { Header } from "@components/Header";
import { ScreenContainer } from "@components/ScreenContainer";
import { Border, Container, HeaderContainer, LastRow, MainSection, Row, RowItem, Title } from "./styles";
import { Spacer } from "@components/Spacer";
import { TextDisplay } from "@components/TextDisplay";
import { Heart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { View } from "react-native";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";

type Params = {
  name: string
}

export function GameDetails() {
  const theme = useTheme()
  const { name } = useRoute().params as Params

  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Spacer bottom={100} />
        <Title>{name}</Title>
        <Border />
        <Spacer
          bottom={168}
        />
      </HeaderContainer>

      <MainSection>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Row>
            <RowItem>
              <TextDisplay weight='bold' center>Aventura</TextDisplay>
              <TextDisplay center>Gênero</TextDisplay>
            </RowItem>

            <RowItem>
              <TextDisplay weight='bold' center>PS5</TextDisplay>
              <TextDisplay center>Plataforma</TextDisplay>
            </RowItem>
          </Row>

          <Spacer bottom={55} />

          <LastRow>
            <Heart
              size={52}
              color={theme.COLORS.PRIMARY}
              weight='fill'
            />
            <TextDisplay center>Lista de Desejos</TextDisplay>
          </LastRow>
        </View>
      </MainSection>

      <View style={{ padding: 20 }}>
        <Button>Remover</Button>
      </View>
    </Container>
  )
}