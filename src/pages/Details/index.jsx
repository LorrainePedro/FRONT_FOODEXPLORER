import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonRequest } from "../../components/ButtonRequest";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tags";
import {
  FiChevronLeft,
  FiChevronsRight,
  FiPlus,
  FiMinus,
  FiChevronRight,
} from "react-icons/fi";
import DishImg from "../../assets/ravanello.png";

export function Details() {
  return (
    <Container>
      <Header />

      <div className="detailsCard">
        <a href="#">
          {" "}
          <FiChevronLeft size={32} /> voltar
        </a>
        <img src={DishImg} alt="Imagem do prato" />
        <h1>Salada Ravanello </h1>

        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
        </p>

        <div className="ingredientTags">
          <Tag title="alface" />
          <Tag title="cebola" />
          <Tag title="pão naan" />
          <Tag title="pepino" />
          <Tag title="rabanete" />
          <Tag title="tomate" />
        </div>

        <div className="bottom">
          <div className="amount">
            <FiMinus size={20.4} />
            <p>01</p>
            <FiPlus size={20.4} />
          </div>
          <ButtonRequest title="pedir - R$25,00" />
        </div>
      </div>

      <Footer />
    </Container>
  );
}
