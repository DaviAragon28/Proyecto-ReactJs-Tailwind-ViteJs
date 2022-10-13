import  { DarkModeProvider } from "./context/Context"
import { Home } from "./components/Home/Home"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { TabBar } from "./components/TabBar/TabBar"
TabBar

function App() {
  return (
    <DarkModeProvider>    
      <Header />
      <Home  />
      <Footer />
      <TabBar />
    </DarkModeProvider>
  
  )
}

export default App
