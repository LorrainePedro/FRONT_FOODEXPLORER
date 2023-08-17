import { Container, Main, MainImg, Section } from "./styles";
import { Header } from "../../components/Header";
import mainImage from "../../assets/principal.png";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

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
      <Header handleSearch={handleSearch} />
      <Main>
        <MainImg>
          <img className="mainImg" src={mainImage} />
          <div className="title">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </MainImg>

        <div className="sections">
          <Section>
            <h2>Refeições</h2>
            <div className="cards">
              <Card />
              <Card />
              <Card />
            </div>
          </Section>

          <Section>
            <h2>Sobremesas</h2>
            <div className="cards">
              <Card />
              <Card />
              <Card />
            </div>
          </Section>

          <Section>
            <h2>Bebidas</h2>
            <div className="cards">
              <Card />
              <Card />
              <Card />
            </div>
          </Section>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
