import { themeType } from './app-theme'
import {} from 'styled-components'

declare module "styled-components" {
    interface DefaultTheme extends themeType {}
}