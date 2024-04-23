export class Game {
  constructor(
    public name: string,
    public genre: string,
    public platform: string,
    public status: GameStatus
  ) { }
}

export enum GameStatus {
  OWNED,
  WISH
}