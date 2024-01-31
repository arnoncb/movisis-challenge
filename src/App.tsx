import { Outlet } from "react-router-dom"
import "./App.css"
import { Navbar } from "./components/Navbar/Navbar.comp"

function App() {
  return (
    <div>
      <h1>Header</h1>
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </div>
  )
}

export default App
