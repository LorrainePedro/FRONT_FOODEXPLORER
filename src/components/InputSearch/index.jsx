import { Container } from "./styles";
import { BiSearch } from "react-icons/bi";

export function InputSearch({ icon: Icon, ...rest }) {
  return (
    <Container>
      <BiSearch size={24} />
      <input {...rest} />
    </Container>
  );
}
