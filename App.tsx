import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { ThemeProvider } from 'styled-components/native';
import { Games } from '@screens/Games';
import defaultTheme from '@themes/defaultTheme';
import { NewGame } from '@screens/NewGame';
import { GameDetails } from '@screens/GameDetails';
import { StatusBar } from 'react-native';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GameDetails />
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor='transparent'
      />
    </ThemeProvider>
  );
} 