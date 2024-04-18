import defaultTheme from '@themes/defaultTheme';
import 'styled-components/native'


type Theme = typeof defaultTheme

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme { }
}