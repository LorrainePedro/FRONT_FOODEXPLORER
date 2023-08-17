import { Container } from "./styles";

export function Button({ title, loading, icon: Icon, ...rest }) {
  return (
    <Container type="button" disabled={(loading = false)} {...rest}>
      {Icon && <Icon size={25} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
