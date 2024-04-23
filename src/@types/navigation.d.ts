import '@react-navigation/native'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Games: undefined,
      GameDetails: {
        name: string
      },
      NewGame: undefined
    }
  }
}