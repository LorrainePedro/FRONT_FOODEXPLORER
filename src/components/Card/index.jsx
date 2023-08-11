import { Container, BottomRow } from "./styles";

import { Button } from "../../components/Button";

import { FiPlus, FiMinus, FiChevronRight } from "react-icons/fi";
import DishImg from "../../assets/ravanello.png";
import { BiHeart } from "react-icons/bi";

export function Card() {
  return (
    <Container>
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
    </Container>
  );
}