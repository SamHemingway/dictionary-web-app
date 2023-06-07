import React from "react";
import styled from "styled-components/macro";
import WordSummary from "../WordSummary/WordSummary";
import WordMeaning from "../WordMeaning/WordMeaning";
import NoWordFound from "../NoWordFound/NoWordFound";
import { SearchTermContext } from "../../contexts/SearchTermProvider/SearchTermProvider";

export default function Result() {
  const { payload, debouncedValue } = React.useContext(SearchTermContext);

  if (!payload[0] && debouncedValue !== "")
    return <NoWordFound errorMsg={payload} />;

  return (
    <Wrapper>
      <WordSummary />
      <WordMeaning />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-block-start: clamp(1.5rem, 6.107vw + 0.069rem, 3rem);
  display: flex;
  flex-direction: column;
`;
