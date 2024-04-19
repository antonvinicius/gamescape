import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { ThemeProvider } from 'styled-components/native';
import defaultTheme from '@themes/defaultTheme';
import { StatusBar } from 'react-native';
import { Routes } from '@routes/index';

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
      <Routes />
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor='transparent'
      />
    </ThemeProvider>
  );
} 