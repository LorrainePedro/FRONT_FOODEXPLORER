import { Container } from "./styles";

import { Button } from "../../components/Button";

import { FiPlus, FiMinus, FiChevronRight } from "react-icons/fi";
import DishImg from "../../assets/ravanello.png";
import { BiHeart, BiSolidPencil } from "react-icons/bi";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function Card({ dish }) {
  const { user } = useAuth();
  const isAdmin = user.isAdmin === 1;
  const imageURL = `${api.defaults.baseURL}/files/dishFiles/${dish.image}`;

  return (
    <Container>
      <div className="Card">
        {user.isAdmin === 1 ? (
          <>
            <Link to="/edit/1">
              {" "}
              <BiSolidPencil className="pencilSvg" />
            </Link>
          </>
        ) : (
          <>
            <BiHeart className="favoriteSvg" />
          </>
        )}

        <img src={dish.image} />
        <div className="dishTitle">
          <h1>
            {dish.title}
            <FiChevronRight className="arrow" />
          </h1>
          <p> {dish.description}</p>
          <span>R$ {dish.price}</span>
        </div>

        <div className="bottomRow">
          <div className="amount">
            <FiMinus size={20.4} />
            <p>01</p>
            <FiPlus size={20.4} />
          </div>

          <Button className="Btn" title="Incluir" />
        </div>
      </div>
    </Container>
  );
}
