export class Game {
  constructor(
    public name: string,
    public genre: string,
    public platform: string,
    public status: GameStatus
  ) { }
}

enum GameStatus {
  OWNED,
  WISH
}