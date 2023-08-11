import { Container, Content, Brand, Form, Register } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export function SignIn() {
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
          <h1>Faça login</h1>
          <label htmlFor="userEmail">E-mail</label>
          <Input
            id="userEmail"
            type="text"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />

          <label htmlFor="userPassword">Senha</label>
          <Input
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
          />

          <Button className="loginButton" title="Entrar" />

          <Register>
            <Link to="/register">Criar uma conta</Link>
          </Register>
        </Form>
      </Content>
    </Container>
  );
}
