import { ChooseContainer, ChooserContainer, ChooserWrapper } from "./styles";
import { ScreenContainer } from "@components/ScreenContainer";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Spacer } from "@components/Spacer";
import { TextDisplay } from "@components/TextDisplay";
import { CheckFat, Heart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Button } from "@components/Button";

export function NewGame() {
  const theme = useTheme()

  return (
    <ScreenContainer>
      <Header />
      <Spacer bottom={75} />
      <Input placeholder="Nome do game" />
      <Spacer bottom={20} />
      <Input placeholder="Gênero" />
      <Spacer bottom={20} />
      <Input placeholder="Plataforma" />
      <Spacer bottom={20} />

      <ChooseContainer>
        <ChooserContainer>
          <ChooserWrapper isSelected={false}>
            <CheckFat
              weight="fill"
              size={32}
              color={theme.COLORS.PRIMARY}
            />
          </ChooserWrapper>
          <Spacer
            top={10}
          />
          <TextDisplay center>Já possuo</TextDisplay>
        </ChooserContainer>

        <Spacer
          right={30}
        />

        <ChooserContainer>
          <ChooserWrapper isSelected={false}>
            <Heart
              weight="fill"
              size={32}
              color={theme.COLORS.PRIMARY}
            />
          </ChooserWrapper>
          <Spacer
            top={10}
          />
          <TextDisplay center>Desejo ter</TextDisplay>
        </ChooserContainer>
      </ChooseContainer>

      <Spacer flex={1} />

      <Button>Cadastrar</Button>
    </ScreenContainer>
  )
}