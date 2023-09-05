import { Container } from "./styles";

import { Button } from "../../components/Button";
import { FiPlus, FiMinus } from "react-icons/fi";
import { BiHeart, BiSolidPencil } from "react-icons/bi";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function Card({ dish }) {
  const { user } = useAuth();
  const isAdmin = user.isAdmin === 1;
  const imageURL = `${api.defaults.baseURL}/files/${dish.image}`;
  // console.log(imageURL);

  const handleFavoriteClick = () => {
    alert("Funcionalidade passando por manutenção");
  };

  const handleMinusClick = () => {
    alert("Ainda não há um prato incluso");
  };

  const handlePlusClick = () => {
    alert("Funcionalidade passando por manutenção");
  };

  const handleBtnClick = () => {
    alert("Funcionalidade passando por manutenção");
  };

  return (
    <Container>
      <div className="Card">
        {user.isAdmin === 1 ? (
          <>
            <Link to={`/edit/${dish.id}`}>
              {" "}
              <BiSolidPencil className="pencilSvg" />
            </Link>
          </>
        ) : (
          <>
            <BiHeart className="favoriteSvg" onClick={handleFavoriteClick} />
          </>
        )}
        <Link to={`/details/${dish.id}`}>
          <img src={imageURL} alt={`Imagem do prato ${dish.title}`} />

          <div className="dishTitle">
            <h1>{dish.title} &gt;</h1>
            <p> {dish.description}</p>
            <span>R$ {dish.price}</span>
          </div>
        </Link>

        {!isAdmin && (
          <div className="bottomRow">
            <div className="amount">
              <FiMinus size={27} onClick={handleMinusClick} />
              <p>01</p>
              <FiPlus size={27} onClick={handlePlusClick} />
            </div>
            <Button className="Btn" title="Incluir" onClick={handleBtnClick} />
          </div>
        )}
      </div>
    </Container>
  );
}
