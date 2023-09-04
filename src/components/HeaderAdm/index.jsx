import { Container, Logo, Logout } from "./styles";

import logo from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../Button";

import { FiMenu, FiLogOut, FiSearch } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function HeaderAdm({ handleSearch }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <div className="menu">
        <Link to="/menu">
          <FiMenu />
        </Link>
      </div>

      <Link to="/">
        <Logo>
          <div className="logoAndName">
            <img src={logo} alt="Logo azul do food explorer" />

            <h1>food explorer</h1>
            <span>admin</span>
          </div>
        </Logo>
      </Link>
      <div className="searchInput">
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
          onChange={handleSearch}
        />
      </div>
      <Link to="/new">
        <Button className="newDish" title="Novo prato" />
      </Link>
      <Logout onClick={handleSignOut}>
        <FiLogOut size={32} className="logoutIcon" />{" "}
      </Logout>
    </Container>
  );
}
