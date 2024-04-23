import { ChooseContainer, ChooserContainer, ChooserWrapper } from "./styles";
import { ScreenContainer } from "@components/ScreenContainer";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Spacer } from "@components/Spacer";
import { TextDisplay } from "@components/TextDisplay";
import { CheckFat, Heart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Button } from "@components/Button";
import { useState } from "react";
import { GameStatus } from "src/storage/games/Game";
import { throwable } from "@utils/errorHandler";
import { gameInsert } from "src/storage/games/gameInsert";
import { useNavigation } from "@react-navigation/native";

export function NewGame() {
  const theme = useTheme()
  const navigation = useNavigation()
  const [selectedOption, setSelectedOption] = useState(GameStatus.OWNED)
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [platform, setPlatform] = useState('')

  function resetForm() {
    setName('')
    setGenre('')
    setPlatform('')
  }

  async function handleSubmit() {
    throwable(async () => {
      await gameInsert({
        name,
        genre,
        platform,
        status: selectedOption
      })

      resetForm()
      navigation.navigate('Games')
    })
  }

  return (
    <ScreenContainer>
      <Header />
      <Spacer bottom={75} />
      <Input
        placeholder="Nome do game"
        value={name}
        onChangeText={setName}
      />
      <Spacer bottom={20} />
      <Input
        placeholder="Gênero"
        value={genre}
        onChangeText={setGenre}
      />
      <Spacer bottom={20} />
      <Input
        placeholder="Plataforma"
        value={platform}
        onChangeText={setPlatform}
      />
      <Spacer bottom={20} />

      <ChooseContainer>
        <ChooserContainer>
          <ChooserWrapper
            isSelected={selectedOption === GameStatus.OWNED}
            onPress={() => setSelectedOption(GameStatus.OWNED)}
          >
            <CheckFat
              weight="fill"
              size={32}
              color={selectedOption === GameStatus.OWNED ? theme.COLORS.WHITE : theme.COLORS.PRIMARY}
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
          <ChooserWrapper
            isSelected={selectedOption === GameStatus.WISH}
            onPress={() => setSelectedOption(GameStatus.WISH)}
          >
            <Heart
              weight="fill"
              size={32}
              color={selectedOption === GameStatus.WISH ? theme.COLORS.WHITE : theme.COLORS.PRIMARY}
            />
          </ChooserWrapper>
          <Spacer
            top={10}
          />
          <TextDisplay center>Desejo ter</TextDisplay>
        </ChooserContainer>
      </ChooseContainer>

      <Spacer flex={1} />

      <Button onPress={handleSubmit}>Cadastrar</Button>
    </ScreenContainer>
  )
}