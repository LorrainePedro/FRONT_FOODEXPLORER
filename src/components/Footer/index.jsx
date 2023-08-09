import { Container } from "./styles";
import logo from "../../assets/logoGray.svg";

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo cinza do food explorer" />
        </a>
        <h1>food explorer</h1>
      </div>

      <span>©2023 - Todos os direitos reservados.</span>
    </Container>
  );
}
