import { Container, Main, MainImg, Section } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";
import { Footer } from "../../components/Footer";
import mainImage from "../../assets/principal.png";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <MainImg>
          <img className="mainImg" src={mainImage} />
          <div className="title">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </MainImg>

        <Section>
          <h2>Refeições</h2>
          <div className="cards">
            <Card />
            <Card />
            <Card />
          </div>
        </Section>

        <Section>
          <h2>Pratos principais</h2>
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
      </Main>
      <Footer />
    </Container>
  );
}
