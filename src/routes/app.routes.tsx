import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GameDetails } from "@screens/GameDetails";
import { Games } from "@screens/Games";
import { NewGame } from "@screens/NewGame";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return <Navigator screenOptions={{
    headerShown: false
  }}>
    <Screen
      name="Games"
      component={Games}
    />

    <Screen
      name="NewGame"
      component={NewGame}
    />

    <Screen
      name="GameDetails"
      component={GameDetails}
    />
  </Navigator>
}