import { Container } from "./styles";

import { PiReceipt } from "react-icons/pi";

export function ButtonRequest({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <PiReceipt size={26} />
      {title}
    </Container>
  );
}
