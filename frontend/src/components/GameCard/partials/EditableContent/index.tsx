import { ChangeEvent, useCallback, useState } from "react";
import Input from "../../../Input";
import { ButtonRow, Container, TextArea } from "./styles";
import Button from "../../../Button";
import { IEditableContentProps } from "./index.type";
import { updateGame } from "@/services/games";
import { useGames } from "@/hooks/useGames";
import { toast } from "react-toastify";

const EditableContent = ({ setEdit, game, index }: IEditableContentProps) => {
  const { handleUpdateGame } = useGames();

  const [title, setTitle] = useState(game.title);
  const [description, setDescription] = useState(game.description);

  const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    },
    []
  );

  const fetchUpdateGame = useCallback(async () => {
    const updatedGame = { title, description };
    try {
      const { data, status } = await updateGame(game.id, updatedGame);

      if (status === 200) {
        setEdit();
        handleUpdateGame(index, data);
        toast.success("Item atualizado com sucesso!");
      }
    } catch {
      toast.error("Não foi possível atualizar o item");
    }
  }, [title, description]);

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
        <Button variant="regular" onClick={fetchUpdateGame}>
          Salvar
        </Button>
      </ButtonRow>
    </Container>
  );
};

export default EditableContent;
