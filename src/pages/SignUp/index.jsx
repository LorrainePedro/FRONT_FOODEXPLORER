import { useState } from "react";
import { Container, Content, Brand, Form, CreateAccount } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    if (!email || !name || !password) {
      return alert("Preencha todos os campos!");
    }
    if (password.length < 6) {
      return alert("A senha deve conter no mínimo 6 digitos.");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

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
          <label htmlFor="userName">Seu nome</label>
          <Input
            id="userName"
            type="text"
            placeholder="Exemplo: Lorraine Rodrigues"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="userEmail">E-mail</label>
          <Input
            id="userEmail"
            type="text"
            placeholder="Exemplo: seunome@email.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="userPassword">Senha</label>
          <Input
            id="userPassword"
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            className="newAccount"
            title="Criar conta"
            onClick={handleSignUp}
          />

          <CreateAccount>
            <Link to="/">Já tenho uma conta</Link>
          </CreateAccount>
        </Form>
      </Content>
    </Container>
  );
}
