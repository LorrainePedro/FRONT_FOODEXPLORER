import { Container, Logo, Logout } from "./styles";

import logo from "../../assets/logo.svg";
import { Menu } from "../Menu";
import { InputSearch } from "../../components/InputSearch";
import { Button } from "../Button";

import { FiMenu, FiLogOut, FiSearch } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function Header({ handleSearch }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();
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
          <img src={logo} alt="Logo azul do food explorer" />
          <h1>food explorer</h1>
        </Logo>
      </Link>

      <div className="searchInput">
        <InputSearch
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
          onChange={handleSearch}
        />
      </div>

      <Button className="deskOrder" title="Pedidos(0)" icon={PiReceipt} />

      <Logout onClick={handleSignOut}>
        <FiLogOut size={32} className="logoutIcon" />{" "}
      </Logout>
    </Container>
  );
}
