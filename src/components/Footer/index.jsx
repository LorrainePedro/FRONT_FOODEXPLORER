import { Container, Logo } from "./styles";
import logo from "../../assets/logoGray.svg";

export function Footer() {
  return (
    <Container>
      <Logo>
        <a href="/">
          <img src={logo} alt="Logo cinza do food explorer" />
        </a>
        <h1>food explorer</h1>
      </Logo>

      <span>©2023 - Todos os direitos reservados.</span>
    </Container>
  );
}
