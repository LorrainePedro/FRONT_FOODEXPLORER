import { Container, Content, Menu, Brand, OrderContent } from "./styles";
import logo from "../../assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

export function Header() {
  return (
    <Container>
      <Content>
        <Menu>
          <FiMenu />
        </Menu>
        <Brand>
          <a href="/">
            <img src={logo} alt="Logo azul do food explorer" />
          </a>
          <h1>food explorer</h1>
        </Brand>
        <OrderContent>
          <PiReceipt />
          <span>0</span>
        </OrderContent>
      </Content>
    </Container>
  );
}
