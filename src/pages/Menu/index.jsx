import { Container, Content, Logout } from "./styles";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { FiSearch } from "react-icons/fi";
import { PiX } from "react-icons/pi";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Menu() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user.isAdmin === 1;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

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
            <li>
              {isAdmin ? (
                <Link to="/new">
                  <p>Novo prato</p>
                </Link>
              ) : (
                ""
              )}
            </li>

            <li className="back">
              <Logout onClick={handleSignOut}>
                <span>Sair</span>
              </Logout>
            </li>
          </ul>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
