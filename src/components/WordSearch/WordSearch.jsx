import React from "react";
import styled from "styled-components/macro";
import TextInput from "../primitives/TextInput/TextInput";
import { SearchTermContext } from "../../contexts/SearchTermProvider/SearchTermProvider";

export default function WordSearch() {
  const { searchTerm, onChange } = React.useContext(SearchTermContext);

  return (
    <Wrapper>
      <TextInput
        label="Word Search"
        icon={<img src="./assets/images/icon-search.svg" />}
        value={searchTerm}
        onChange={onChange}
        placeholder="Search for any word..."
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-block-start: var(--size-l);
`;
