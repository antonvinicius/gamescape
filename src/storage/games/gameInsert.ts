import AsyncStorage from "@react-native-async-storage/async-storage";
import { Game } from "./Game";
import { gameGet } from "./gameGet";
import storageConfig from "../storageConfig";
import { AppError } from "@utils/AppError";

export async function gameInsert(game: Game) {
  try {
    if (!game.name || !game.genre || !game.platform)
      throw new AppError('Preencha todas as informações')

    const games = await gameGet()

    if (games.includes(game)) throw new AppError('O Game já está registrado. Tente colocar outro nome.')

    const newGames = [...games, game]

    await AsyncStorage.setItem(storageConfig.games, JSON.stringify(newGames))
  } catch (error) {
    throw error
  }
}