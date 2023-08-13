import { Container } from "./styles";
import { BiSearch } from "react-icons/bi";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      <BiSearch size={24} />
      <input {...rest} />
    </Container>
  );
}
