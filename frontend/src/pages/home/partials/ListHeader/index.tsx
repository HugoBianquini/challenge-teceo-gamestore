import { HeaderContainer, Row } from "./styles";
import { useGames } from "@/hooks/useGames";
import SelectedSection from "../SelectedSection";
import { IListHeaderProps } from "./index.type";
import Checkbox from "@/components/Checkbox";

const ListHeader = ({ totalItems }: IListHeaderProps) => {
  const { selectedGames } = useGames();

  return (
    <HeaderContainer>
      <Row>
        <div>
          <Checkbox checked={false} onChange={() => {}} /> Selecionar tudo
        </div>
        <h3>Games no catálogo: {totalItems}</h3>
      </Row>

      {selectedGames.length > 0 && <SelectedSection />}
    </HeaderContainer>
  );
};

export default ListHeader;
