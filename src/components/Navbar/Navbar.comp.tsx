import { Link } from "react-router-dom"
import { StyledNavbar } from "./Navbar.styled"

export const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/produtos">Produtos</Link>
    </StyledNavbar>
  )
}
