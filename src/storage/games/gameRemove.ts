import AsyncStorage from "@react-native-async-storage/async-storage";
import { Game } from "./Game";
import { gameGet } from "./gameGet";
import storageConfig from "../storageConfig";

export async function gameRemove(game: Game) {
  try {
    const games = await gameGet()
    const withoutTargetGame = games.filter(g => g.name != game.name)

    await AsyncStorage.setItem(storageConfig.games, JSON.stringify(withoutTargetGame))
  } catch (error) {
    throw error
  }
}