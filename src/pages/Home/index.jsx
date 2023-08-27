import { Container, Main, MainImg, Section } from "./styles";
import mainImage from "../../assets/principal.png";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { HeaderAdm } from "../../components/HeaderAdm";
import { DishList } from "../../components/DishList";

import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import React, { useRef } from "react";

export function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(
        `/dishes?title=${search}&ingredient=${search}`
      );
      setDishes(response.data);
    }

    fetchDish();
  }, [search]);

  //for each section
  const dishesCardsContainerRef = useRef(null);
  const dessertsCardsContainerRef = useRef(null);
  const drinksCardsContainerRef = useRef(null);

  const scrollLeft = (containerRef) => {
    containerRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = (containerRef) => {
    containerRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  async function handleIndex() {
    console.alert("get.dishes");
  }

  return (
    <Container>
      {user.isAdmin === 1 ? (
        <>
          <HeaderAdm handleSearch={handleSearch} />
        </>
      ) : (
        <>
          <Header handleSearch={handleSearch}></Header>
        </>
      )}

      <Main>
        <MainImg>
          <img className="mainImg" src={mainImage} />
          <div className="title">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </MainImg>

        <div className="sections">
          <h2>Refeições</h2>
          <DishList dishes={dishes} />
          <Section>
            <button
              className="scrollLeft"
              onClick={() => scrollLeft(dishesCardsContainerRef)}
            >
              &lt;
            </button>
            <div className="cards" ref={dishesCardsContainerRef}></div>
            <button
              className="scrollRight"
              onClick={() => scrollRight(dishesCardsContainerRef)}
            >
              &gt;
            </button>
          </Section>

          <h2>Sobremesas</h2>
          <Section>
            <button
              className="scrollLeft"
              onClick={() => scrollLeft(dessertsCardsContainerRef)}
            >
              &lt;
            </button>
            <div className="cards" ref={dessertsCardsContainerRef}></div>
            <button
              className="scrollRight"
              onClick={() => scrollRight(dessertsCardsContainerRef)}
            >
              &gt;
            </button>
          </Section>

          <h2>Bebidas</h2>

          <Section>
            <button
              className="scrollLeft"
              onClick={() => scrollLeft(drinksCardsContainerRef)}
            >
              &lt;
            </button>
            <div className="cards" ref={drinksCardsContainerRef}></div>
            <button
              className="scrollRight"
              onClick={() => scrollRight(drinksCardsContainerRef)}
            >
              &gt;
            </button>
          </Section>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
