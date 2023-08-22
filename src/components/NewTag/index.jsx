import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

export function NewTag({ title, $isNew, value, onClick, ...rest }) {
  return (
    <Container $isNew={$isNew} {...rest}>
      <input type="text" value={value} readOnly={!$isNew} {...rest} />

      <button onClick={onClick} className={$isNew ? "addBtn" : "delBtn"}>
        {$isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
