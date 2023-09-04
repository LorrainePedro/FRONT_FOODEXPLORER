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

export function EditDish() {
  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [image, setImage] = useState(null);

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

  async function handleRemoveDish() {
    const confirmed = confirm("Tem certeza que deseja deletar esse prato?");

    if (confirmed) {
      await api.delete(`/dishes/${params.id}`);
      navigate("/");
    }
  }

  async function handleEditDish(e) {
    e.preventDefault();

    if (!image) {
      return alert("Por favor, adicione uma imagem ao prato!");
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

    ingredients.forEach((ingredient) => {
      formData.append("ingredients[]", ingredient);
    });

    await api
      .put(`/dishes/${params.id}`, formData)
      .then(() => {
        alert(
          "O prato foi editado com sucesso! Redirecionaremos você aos detalhes do prato! ;) "
        );
        navigate(-1);
      })
      .catch((error) => {
        if (error.response) {
          alert(
            "Ops, algum erro ocorreu. O prato infelizmente não foi atualizado! ;("
          );
        }
      });
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);

      const { title, description, price, ingredients, category } =
        response.data;
      setTitle(title);
      setDescription(description);
      setPrice(price);
      setCategory(category);
      setIngredients(ingredients.map((ingredient) => ingredient.name));
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <HeaderAdm />
      <Content>
        <div className="back">
          <Link to="/">
            <MdOutlineArrowBackIos size={22} className="icon" /> <h2>voltar</h2>
          </Link>
        </div>

        <h1>Editar prato</h1>

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
                  onChange={handleAddImage}
                />
              </ImageUpload>
            </div>

            <div className="nameNew">
              <span>Nome</span>
              <Input
                type="text"
                placeholder="Ex: Salada Ceasar"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="selectNew">
              <span>Categoria</span>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
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
                type="text"
                placeholder="R$ 00,00"
                value={price}
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
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="buttonRow">
              <Button
                className="delButton"
                title="Excluir prato"
                onClick={handleRemoveDish}
              />
              <Button
                className="addButton"
                title="Salvar alterações"
                onClick={handleEditDish}
              />
            </div>
          </Description>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
