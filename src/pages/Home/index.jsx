import { Container, Main, Content, BottomRow } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";
import { Footer } from "../../components/Footer";
import mainImage from "../../assets/principal.png";
import { Button } from "../../components/Button";

import { FiPlus, FiMinus, FiChevronRight } from "react-icons/fi";
import DishImg from "../../assets/ravanello.png";
import { BiHeart } from "react-icons/bi";

export function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <img className="mainImg" src={mainImage} />
        <div className="title">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Main>
      <Content>
        <div className="Card">
          <BiHeart className="favoriteSvg" />
          <img src={DishImg} />
          <div className="dishTitle">
            <h1>
              Prugna Pie
              <FiChevronRight className="arrow" />
            </h1>
            <span>R$ 25,00</span>
          </div>

          <BottomRow>
            <div className="amount">
              <FiMinus size={20.4} />
              <p>01</p>
              <FiPlus size={20.4} />
            </div>

            <Button title="Incluir" />
          </BottomRow>
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
