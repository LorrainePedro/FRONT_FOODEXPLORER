import { Container } from "./styles";
import logo from "../../assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

export function Header() {
  return (
    <Container>
      <div className="menu">
        <FiMenu />
      </div>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo azul do food explorer" />
        </a>
        <h1>food explorer</h1>
      </div>
      <div className="order">
        <PiReceipt />
        <span>0</span>
      </div>
    </Container>
  );
}
