import { Alert } from "react-native"
import { AppError } from "./AppError"

export function errorHandler(error: any) {
  if (error instanceof AppError) {
    return Alert.alert('Erro', error.message)
  }

  Alert.alert('Erro', 'Erro inesperado. Tente novamente mais tarde.')
}

export async function throwable(callback: () => Promise<void>, finallyCallback?: () => void) {
  try {
    await callback()
  } catch (error) {
    errorHandler(error)
  } finally {
    if (finallyCallback) {
      finallyCallback()
    }
  }
}