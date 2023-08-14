import {
  Container,
  Content,
  Form,
  InputWrapper,
  ImageUpload,
  AddIngredients,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Tags } from "../../components/Tags";

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
          <InputWrapper className="firstSection">
            <label htmlFor="addImg" className="labels">
              Imagem do prato
            </label>
            <ImageUpload>
              <MdOutlineFileUpload size={24} />
              <h2>Selecione a Imagem</h2>

              <input id="addImg" type="file" className="addFile" />
            </ImageUpload>

            <label htmlFor="addName" className="labels">
              Nome
            </label>
            <Input id="addName" type="text" placeholder="Ex: Salada Ceasar" />

            <label htmlFor="addCategory" className="labels">
              Categoria
            </label>
            <select className="selectCategory">
              <option value="refeicoes">Refeição</option>
              <option value="sobremesas">Sobremesa</option>
              <option value="bebidas">Bebida</option>
            </select>
          </InputWrapper>

          <InputWrapper className="secondSection">
            <label htmlFor="addTags" className="labels">
              Ingredientes
            </label>
            <AddIngredients id="addTags">
              <Tags placeholder="Adicionar" />
            </AddIngredients>

            <label htmlFor="addPrice" className="labels">
              Preço
            </label>
            <Input type="text" placeholder="R$ 00,00" />
          </InputWrapper>

          <InputWrapper className="thirdSection">
            <label htmlFor="addDescription" className="labels">
              Descrição
            </label>
            <Textarea
              id="addDescription"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
            <Button className="saveButton" title="Salvar alterações" />
          </InputWrapper>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
