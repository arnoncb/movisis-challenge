import { Outlet } from "react-router-dom"
import { Header } from "./components/organisms/Header/Header.comp"
import { useEffect } from "react"
import { Box } from "./components/atoms/Box/Box.comp"

function App() {
  /*The following method had to be implemented due to limitations
    when importing remote fonts with styled-components.*/

  useEffect(() => {
    const link = document.createElement("link")
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <Box $height="100%" $wrapper $direction="column" $gap="0">
      <Header />
      <Outlet />
    </Box>
  )
}

export default App
