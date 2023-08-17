import { Container, Content, Logo, Search, Logout } from "./styles";

import logo from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

import { FiMenu, FiLogOut, FiSearch } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { api } from "../../services/api";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";

export function Header({ handleSearch }) {
  // const [dishes, setDishes] = useState([]);
  // const [search, setSearch] = useState("");

  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleHome() {
    navigate("/");
  }

  return (
    <Container>
      <Content>
        <div className="menu">
          <Link to="/menu">
            <FiMenu />
          </Link>
        </div>

        <div className="main">
          <Logo onClick={handleHome}>
            <div className="brand">
              <img src={logo} alt="Logo azul do food explorer" />

              <h1>food explorer</h1>
            </div>

            {user.isAdmin ? (
              <div className="admin">
                <span>admin</span>
              </div>
            ) : (
              <></>
            )}
          </Logo>

          <Search>
            <Input
              placeholder="Busque por pratos ou ingredientes"
              icon={FiSearch}
              onChange={handleSearch}
            />
          </Search>

          {user.isAdmin === 1 ? (
            <Button to="/new" className="createDish" title="Novo Prato " />
          ) : (
            <Button className="deskOrder" title="Pedidos(0)" icon={PiReceipt} />
          )}

          <Logout onClick={handleSignOut}>
            <FiLogOut size={32} />
          </Logout>
        </div>
      </Content>
    </Container>
  );
}

// ),
// (
//   <div className="desktopOrder">
//     <Button title="Meus Pedidos (0)" to="" icon={requestsLogo} />
//   </div>
// )

// <Button title="Pedidos(0) " icon={PiReceipt} />
