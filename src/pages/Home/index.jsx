import { Container, Main, MainImg, Section } from "./styles";
import mainImage from "../../assets/principal.png";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { HeaderAdm } from "../../components/HeaderAdm";

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

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?title=${search}`);
        setDishes(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDishes("refeições");
    fetchDishes("sobremesas");
    fetchDishes("bebidas");
  }, [search]);

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
          <Section>
            <button
              className="scrollLeft"
              onClick={() => scrollLeft(dishesCardsContainerRef)}
            >
              &lt;
            </button>
            <div className="cards" ref={dishesCardsContainerRef}>
              <Card />
            </div>
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
            <div className="cards" ref={dessertsCardsContainerRef}>
              <Card />
            </div>
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
            <div className="cards" ref={drinksCardsContainerRef}>
              <Card />
            </div>
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
