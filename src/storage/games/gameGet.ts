import AsyncStorage from '@react-native-async-storage/async-storage';
import storageConfig from '../storageConfig';
import { Game } from './Game';

export async function gameGet(): Promise<Game[]> {
  try {
    const storage = await AsyncStorage.getItem(storageConfig.games)

    return storage ? JSON.parse(storage) as Game[] : []
  } catch (error) {
    throw error
  }
}