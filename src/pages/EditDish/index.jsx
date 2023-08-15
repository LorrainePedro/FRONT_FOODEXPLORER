import {
  Container,
  Content,
  Form,
  InputWrapper,
  ImageUpload,
  IngredientsTags,
  Description,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Tags } from "../../components/Tags";
import { NewTag } from "../../components/NewTag";

import { MdOutlineArrowBackIos, MdOutlineFileUpload } from "react-icons/md";

export function EditDish() {
  return (
    <Container>
      <Header />
      <Content>
        <div className="back">
          <Link to="/">
            <MdOutlineArrowBackIos size={22} />
            <h2>Voltar</h2>
          </Link>
        </div>
        <h1>Editar prato</h1>

        <Form>
          <InputWrapper>
            <div className="imgNew">
              <span>Imagem do prato</span>
              <ImageUpload>
                <MdOutlineFileUpload size={24} />
                <h2>Selecione a imagem</h2>
                <input type="file" className="addFile" />
              </ImageUpload>
            </div>

            <div className="nameNew">
              <span>Nome</span>
              <Input type="text" placeholder="Ex: Salada Ceasar" />
            </div>
            <div className="selectNew">
              <span>Categoria</span>
              <select>
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
                <NewTag
                  // key={String(index)}
                  // value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />

                <NewTag isNew placeholder="Adicionar" />
              </div>
            </IngredientsTags>
            <div className="price">
              <span>Preço</span>
              <Input id="inputPrice" type="number" placeholder="R$ 00,00" />
            </div>
          </div>

          <Description>
            <span>Descrição</span>
            <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
            <div className="buttonRow">
              <Button className="delButton" title="Excluir prato" />
              <Button className="addButton" title="Salvar alterações" />
            </div>
          </Description>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
