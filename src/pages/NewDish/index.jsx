import {
  Container,
  Content,
  Form,
  InputWrapper,
  ImageUpload,
  IngredientsTags,
  Description,
} from "./styles";

import { HeaderAdm } from "../../components/HeaderAdm";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Tags } from "../../components/Tags";
import { NewTag } from "../../components/NewTag";

import { MdOutlineArrowBackIos, MdOutlineFileUpload } from "react-icons/md";

import { api } from "../../services/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export function NewDish() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [image, setImage] = useState(null);
  const [showTagsInTwoLines, setShowTagsInTwoLines] = useState(false);

  function handleAddImage(e) {
    const file = e.target.files[0];
    setImage(file);
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleNewDish() {
    if (!title) {
      return alert("Falta preencher o campo título");
    }
    if (!description) {
      return alert("Falta preencher o campo descrição");
    }
    if (!price) {
      return alert("Falta preencher o campo preço");
    }
    if (!category) {
      return alert("Falta preencher o campo categoria");
    }
    if (!image) {
      return alert("Faltou fazer o upload da imagem desejada");
    }

    if (newIngredient) {
      return alert("Ficou um ingrediente no campo por adicionar");
    }

    if (ingredients.length < 2) {
      return alert("Você precisa adicionar ao menos dois ingredientes.");
    }

    if (ingredients.length > 6) {
      return alert("O número máximo de ingredientes permitidos é 6.");
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    await api
      .post("/dishes", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        alert(
          "O prato criado com sucesso! Redirecionaremos você para a página principal! ;) "
        );
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(
            "Ops, algum erro ocorreu. O prato infelizmente não foi cadastrado!"
          );
        }
      });

    useEffect(() => {
      setShowTagsInTwoLines(ingredients.length >= 3);
    }, [ingredients]);
  }

  return (
    <Container>
      <HeaderAdm />
      <Content>
        <div className="back">
          <Link to="/">
            <MdOutlineArrowBackIos size={22} />
            <h2>Voltar</h2>
          </Link>
        </div>
        <h1>Adicionar prato</h1>

        <Form>
          <InputWrapper>
            <div className="imgNew">
              <span>Imagem do prato</span>
              <ImageUpload>
                <MdOutlineFileUpload size={24} />
                <h2>Selecione a imagem</h2>
                <input
                  type="file"
                  className="addFile"
                  onChange={handleAddImage}
                />
              </ImageUpload>
            </div>

            <div className="nameNew">
              <span>Nome</span>
              <Input
                type="text"
                placeholder="Ex: Salada Ceasar"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="selectNew">
              <span>Categoria</span>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="refeicoes">Refeição</option>
                <option value="sobremesas">Sobremesa</option>
                <option value="bebidas">Bebida</option>
              </select>
            </div>
          </InputWrapper>

          <div className="ingredientsRow">
            <IngredientsTags showTagsInTwoLines={showTagsInTwoLines}>
              <span>Ingredientes</span>
              <div className="addTags">
                {ingredients.map((ingredient, index) => (
                  <NewTag
                    key={index}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}

                <NewTag
                  placeholder="Adicionar"
                  value={newIngredient}
                  $isNew
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </div>
            </IngredientsTags>
            <div className="price">
              <span>Preço</span>
              <Input
                id="inputPrice"
                type="text"
                placeholder="R$ 00,00"
                onChange={(e) => setPrice(e.target.value)}
                onBlur={(e) => {
                  const formattedPrice = e.target.value.replace(".", ",");
                  setPrice(formattedPrice);
                }}
              />
            </div>
          </div>

          <Description>
            <span>Descrição</span>
            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="buttonRow">
              <Button title="Salvar alterações" onClick={handleNewDish} />
            </div>
          </Description>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
