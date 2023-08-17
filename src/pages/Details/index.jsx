import {
  Container,
  Content,
  Description,
  IngredientTags,
  BottomRow,
  Image,
} from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Tags } from "../../components/Tags";
import { FiChevronLeft, FiChevronRight, FiPlus, FiMinus } from "react-icons/fi";
import DishImg from "../../assets/ravanello.png";

export function Details() {
  return (
    <Container>
      <Header />
      <Content>
        <Image>
          <a href="/">
            {" "}
            <FiChevronLeft size={32} /> voltar
          </a>
          <img src={DishImg} alt="Imagem do prato" />
        </Image>

        <Description>
          <h1>Salada Ravanello </h1>

          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <IngredientTags>
            <Tags title="alface" />
            <Tags title="cebola" />
            <Tags title="pão naan" />
            <Tags title="pepino" />
            <Tags title="rabanete" />
            <Tags title="tomate" />
          </IngredientTags>

          <BottomRow>
            <div className="amount">
              <FiMinus size={20.4} />
              <p>01</p>
              <FiPlus size={20.4} />
            </div>
            <Button title="Incluir - R$25,00" />
          </BottomRow>
        </Description>
      </Content>
      <Footer />
    </Container>
  );
}
