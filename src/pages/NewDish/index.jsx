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

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  function handleAddIngredient() {
    if (newIngredient.length < 3) {
      return alert(
        "Erro: Você está tentando inserir um nome de ingrediente inválido!"
      );
    } else {
      setIngredients((prevState) => [...prevState, newIngredient]);
      setNewIngredient("");
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  async function handleNewDish() {
    const fileUpload = new FormData();

    if (!title) {
      return alert("Preencha titulo");
    }
    if (!description) {
      return alert("Preencha desc");
    }
    if (!price) {
      return alert("Preencha price");
    }
    if (!category) {
      return alert("Preencha cat");
    }
    if (!image) {
      return alert("Preencha img");
    }

    if (newIngredient.length > 0) {
      return alert(
        "Você deixou um ingrediente pedente no campo para adicionar."
      );
    }

    try {
      const response = await api.post("/dishes", {
        title,
        price,
        ingredients,
        description,
        category,
      });

      const dish_id = response.data.dishes_id;

      fileUpload.append("image", image);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await api.patch(`/dishes/image/${dish_id}`, fileUpload, config); //MEXI NO DISH PARA DISHES

      alert("Prato criado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.message) {
        return alert("Não foi possivel cadastrar o prato.");
      }
    }
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

        <Form encType="multipart/form-data">
          <InputWrapper>
            <div className="imgNew">
              <span>Imagem do prato</span>
              <ImageUpload>
                <MdOutlineFileUpload size={24} />
                <h2>Selecione a imagem</h2>
                <input
                  type="file"
                  className="addFile"
                  onChange={(e) => setImage(e.target.files[0])}
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
            <IngredientsTags>
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
                type="number"
                placeholder="R$ 00,00"
                onChange={(e) => setPrice(e.target.value)}
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
