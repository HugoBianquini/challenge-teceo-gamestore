import { ChangeEvent, useCallback, useState } from "react";
import Input from "../../../Input";
import { ButtonRow, Container, TextArea } from "./styles";
import Button from "../../../Button";
import { IEditableContentProps } from "./index.type";

const EditableContent = ({ setEdit }: IEditableContentProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    },
    []
  );

  return (
    <Container>
      <Input placeholder="Título" value={title} onChange={handleChangeTitle} />
      <TextArea
        placeholder="Descrição"
        value={description}
        onChange={handleChangeDescription}
      />
      <ButtonRow>
        <Button variant="error" onClick={setEdit}>
          Cancelar
        </Button>
        <Button variant="regular" onClick={setEdit}>
          Salvar
        </Button>
      </ButtonRow>
    </Container>
  );
};

export default EditableContent;
