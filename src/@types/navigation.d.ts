import '@react-navigation/native'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Games: undefined,
      GameDetails: undefined,
      NewGame: undefined
    }
  }
}