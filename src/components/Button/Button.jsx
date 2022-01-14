import { PageButton } from "./ButtonStyled";

export const Button = ({ type, onClick, text }) => {
  return (
    <PageButton type={type} onClick={onClick}>
      {text}
    </PageButton>
  );
};
