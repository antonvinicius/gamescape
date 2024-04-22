import AsyncStorage from "@react-native-async-storage/async-storage";
import { Game } from "./Game";
import { gameGet } from "./gameGet";
import storageConfig from "../storageConfig";
import { AppError } from "@utils/AppError";

export async function gameInsert(game: Game) {
  try {
    const games = await gameGet()

    if (games.includes(game)) throw new AppError('Game already registered. Input other game.')

    const newGames = [...games, game]

    await AsyncStorage.setItem(storageConfig.games, JSON.stringify(newGames))
  } catch (error) {
    throw error
  }
}