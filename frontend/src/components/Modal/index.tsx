import { XIcon } from "lucide-react";
import { IModalProps } from "./index.type";
import { Body, CloseBox, Container, Header, Title, Wrapper } from "./styles";

const Modal = ({ children, title, setClose, isOpen }: IModalProps) => {
  if (!isOpen) {
    return <></>;
  }

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>{title}</Title>
          <CloseBox onClick={setClose}>
            <XIcon />
          </CloseBox>
        </Header>
        <Body>{children}</Body>
      </Container>
    </Wrapper>
  );
};

export default Modal;
