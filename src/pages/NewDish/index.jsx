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

export function NewDish() {
  return (
    <Container>
      <Header />
      <Content>
        <Link to="/">
          <MdOutlineArrowBackIos />
          <span>Voltar</span>
        </Link>
        <h1>Novo prato</h1>

        <Form>
          <InputWrapper>
            <label htmlFor="addImg">
              Imagem do prato
              <ImageUpload>
                <MdOutlineFileUpload size={24} />
                <h2>Selecione a Imagem</h2>

                <input id="addImg" type="file" className="addFile" />
              </ImageUpload>
            </label>

            <label htmlFor="addName">Nome</label>
            <Input id="addName" type="text" placeholder="Ex: Salada Ceasar" />

            <div className="selectCtg">
              <label htmlFor="addCategory">Categoria</label>
              <select className="selectCategory">
                <option value="refeicoes">Refeição</option>
                <option value="sobremesas">Sobremesa</option>
                <option value="bebidas">Bebida</option>
              </select>
            </div>
          </InputWrapper>

          <label htmlFor="addTags">Ingredientes</label>
          <IngredientsTags id="addTags">
            <NewTag
              // key={String(index)}
              // value={ingredient}
              onClick={() => handleRemoveIngredient(ingredient)}
            />

            <NewTag isNew placeholder="Adicionar" />
          </IngredientsTags>

          <label htmlFor="addPrice" className="labels">
            Preço
          </label>
          <Input type="text" placeholder="R$ 00,00" />

          <Description>
            <label htmlFor="addDescription">Descrição</label>
            <Textarea
              id="addDescription"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
            <Button className="saveButton" title="Salvar alterações" />
          </Description>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
