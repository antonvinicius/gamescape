import { gameGet } from "./gameGet";
import { AppError } from "@utils/AppError";
import { Game } from "./Game";

export async function gameGetByName(name: string): Promise<Game> {
  try {
    const games = await gameGet()
    const targetGame = games.find(game => game.name === name)

    if (!targetGame) throw new AppError('Jogo não encontrado. Tente novamente')

    return targetGame
  } catch (error) {
    throw error
  }
}