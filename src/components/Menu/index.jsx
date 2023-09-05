import React from "react";
import { Container, Content, HamburgerButton } from "./styles";
import { Footer } from "../../components/Footer";
import { DishList } from "../../components/DishList";

import { InputSearch } from "../../components/InputSearch";

import { FiSearch, FiMenu } from "react-icons/fi";
import { PiX } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Menu({ menuIsVisible, setMenuIsVisible }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user.isAdmin === 1;

  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(
        `/dishes?title=${search}&ingredient=${search}`
      );
      setDishes(response.data);
    }

    fetchDish();
  }, [search]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container $isVisible={menuIsVisible}>
      <div className="headerMenu">
        {menuIsVisible ? (
          <PiX
            size={25}
            className="pixIcon"
            onClick={() => setMenuIsVisible(false)}
          />
        ) : (
          <HamburgerButton onClick={() => setMenuIsVisible(true)}>
            <FiMenu size={25} className="menuIcon" />
          </HamburgerButton>
        )}
        <p>Menu</p>
      </div>

      <Content>
        <div className="options">
          <InputSearch
            placeholder="Busque por pratos ou ingredientes"
            icon={FiSearch}
            value={search}
            onChange={handleSearch}
          />

          <ul>
            {isAdmin ? (
              <li>
                <Link to="/new">
                  <p>Novo prato</p>
                </Link>
              </li>
            ) : null}

            <li onClick={handleSignOut}>
              <p>Sair</p>
            </li>
          </ul>

          <div className="list">
            {" "}
            <DishList dishes={dishes} />
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
