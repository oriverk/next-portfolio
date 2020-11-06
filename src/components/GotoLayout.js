import { ColorProvider } from '../context/color-mode'
import { Header } from './header'
import { Footer } from './footer'

export const GotoLayout = ({ children }) => {
  return (
    <ColorProvider>
      {/* <Header /> */}
      {children}
      <Footer />
    </ColorProvider>
  )
}