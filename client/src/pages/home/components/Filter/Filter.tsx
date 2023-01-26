import {
  Container,
  ChevronDownImg,
  Text,
  FilterMenu,
  FilterItem,
  CheckBox,
  FilterText,
} from "./Filter.styled";

import { useState } from "react";
import useWindowSize from "../../../../common/hooks/useWindowSize";

import ChevronDownSVG from "../../../../assets/svg/chevron-down.svg";

export const Filter = () => {
  const [filterMenuOpened, setFilterMenuOpened] = useState<boolean>(false);

  const filterMenuHandler = () => {
    setFilterMenuOpened((prevState) => !prevState);
  };

  const { width } = useWindowSize();

  return (
    <Container onClick={filterMenuHandler}>
      <Text>{width < 768 ? "Filter" : "Filter by status"}</Text>
      <ChevronDownImg src={ChevronDownSVG} alt="" />
      {filterMenuOpened ? (
        <FilterMenu>
          <FilterItem>
            <CheckBox />
            <FilterText>Draft</FilterText>
          </FilterItem>
          <FilterItem>
            <CheckBox />
            <FilterText>Pending</FilterText>
          </FilterItem>
          <FilterItem>
            <CheckBox />
            <FilterText>Paid</FilterText>
          </FilterItem>
        </FilterMenu>
      ) : null}
    </Container>
  );
};
