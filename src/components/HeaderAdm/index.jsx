import { Container, Logo, Logout } from "./styles";

import logo from "../../assets/logo.svg";
import { Button } from "../Button";
import { Menu } from "../Menu";
import { InputSearch } from "../InputSearch";
import { FiMenu, FiLogOut, FiSearch } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function HeaderAdm({ handleSearch }) {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <div className="menuOn">
        <Menu
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <FiMenu
          className="menuIcon"
          size={25}
          onClick={() => setMenuIsVisible(!menuIsVisible)}
        />
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
        <InputSearch
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
