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

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");

  const { user } = useAuth();
  const navigate = useNavigate();

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
          <Section>
            <h2>Refeições</h2>
            <div className="cards">
              <Card />
            </div>
          </Section>

          <Section>
            <h2>Sobremesas</h2>
            <div className="cards">
              <Card />
            </div>
          </Section>

          <Section>
            <h2>Bebidas</h2>
            <div className="cards">
              <Card />
            </div>
          </Section>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
