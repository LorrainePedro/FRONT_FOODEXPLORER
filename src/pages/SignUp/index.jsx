import { Container, Content, Brand, Form, CreateAccount } from "./styles";
// import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Content>
        <Brand>
          <a href="/">
            <img src={logo} alt="Logo azul do food explorer" />
          </a>
          <h1>food explorer</h1>
        </Brand>

        <Form>
          <h1>Crie sua conta</h1>
          <label htmlFor="userName">Seu Nome</label>
          <Input
            id="userName"
            type="text"
            placeholder="Exemplo: Lorraine Rodrigues"
          />

          <label htmlFor="userEmail">E-mail</label>
          <Input
            id="userEmail"
            type="text"
            placeholder="Exemplo: seunome@email.com.br"
          />

          <label htmlFor="userPassword">Senha</label>
          <Input
            id="userPassword"
            type="password"
            placeholder="No mínimo 6 caracteres"
          />

          <Button className="newAccount" title="Criar conta" />

          <CreateAccount>
            <a href="/">Já tenho uma conta</a>
          </CreateAccount>
        </Form>
      </Content>
    </Container>
  );
}
