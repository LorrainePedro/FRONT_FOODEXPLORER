import { Container } from "./styles";

import { Button } from "../../components/Button";

import { FiPlus, FiMinus, FiChevronRight } from "react-icons/fi";
import { BiHeart, BiSolidPencil } from "react-icons/bi";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function Card({ dish }) {
  const { user } = useAuth();
  const isAdmin = user.isAdmin === 1;
  const imageURL = `${api.defaults.baseURL}/files/${dish.image}`;
  console.log(imageURL);

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
            <BiHeart className="favoriteSvg" />
          </>
        )}
        <Link to={`/details/${dish.id}`}>
          <img src={imageURL} alt={`Imagem do prato ${dish.title}`} />
        </Link>

        <div className="dishTitle">
          <h1>{dish.title} &gt;</h1>
          <p> {dish.description}</p>
          <span>R$ {dish.price}</span>
        </div>

        {!isAdmin && (
          <div className="bottomRow">
            <div className="amount">
              <FiMinus size={27} />
              <p>01</p>
              <FiPlus size={27} />
            </div>
            <Button className="Btn" title="Incluir" />
          </div>
        )}
      </div>
    </Container>
  );
}
