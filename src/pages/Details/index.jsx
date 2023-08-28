import {
  Container,
  Content,
  Description,
  IngredientTags,
  BottomRow,
  Image,
} from "./styles";
import { HeaderAdm } from "../../components/HeaderAdm";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Tags } from "../../components/Tags";
import { FiChevronLeft, FiChevronRight, FiPlus, FiMinus } from "react-icons/fi";

import React from "react";
import { useState, useEffect } from "react";

import { useParams, useNavigate, Link } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Details() {
  const { user } = useAuth();
  const isAdmin = user.isAdmin === 1;

  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
      // console.log(response.data);
    }

    fetchDish();
  }, []);

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
      {data && (
        <Content>
          <button className="backButton" onClick={() => navigate(-1)}>
            <FiChevronLeft size={38} />
            <h2>voltar</h2>
          </button>

          <div className="main">
            <Image>
              <img src={imageURL} alt="Salada Ravanello" />
            </Image>

            <Description>
              <h1>{data.title} </h1>

              <p>{data.description}</p>

              <IngredientTags>
                {data.ingredients &&
                  data.ingredients.map((ingredient) => (
                    <Tags key={ingredient.id} title={ingredient.name} />
                  ))}
              </IngredientTags>

              <BottomRow>
                {!isAdmin && (
                  <div className="amount">
                    <FiMinus size={20.4} />
                    <p>01</p>
                    <FiPlus size={20.4} />
                  </div>
                )}

                {isAdmin ? (
                  <Link to={`/edit/${params.id}`}>
                    <Button title="Editar prato" />
                  </Link>
                ) : (
                  <Button title="Incluir - R$25,00" />
                )}
              </BottomRow>
            </Description>
          </div>
        </Content>
      )}
      <Footer />
    </Container>
  );
}
