import { Container, Content } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { FiSearch } from "react-icons/fi";

import { PiX } from "react-icons/pi";

export function Menu() {
  return (
    <Container>
      <Content>
        <div className="headerMenu">
          <Link to="/">
            <PiX size={25} />
          </Link>
          <p>Menu</p>
        </div>

        <div className="options">
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={FiSearch}
          />
          <ul>
            <li></li>

            <li className="back">
              <a href="/">Sair</a>
            </li>
          </ul>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
