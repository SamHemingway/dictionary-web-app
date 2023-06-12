import React from "react";
import styled from "styled-components/macro";
import WordSummary from "../WordSummary/WordSummary";
import WordMeaning from "../WordMeaning/WordMeaning";
import NoWordFound from "../NoWordFound/NoWordFound";
import PageLoadingSkeleton from "../PageLoadingSkeleton/PageLoadingSkeleton";
import { SearchTermContext } from "../../contexts/SearchTermProvider/SearchTermProvider";

export default function Result() {
  const { payload, debouncedValue, payloadReceived } =
    React.useContext(SearchTermContext);

  if (!payload[0] && debouncedValue !== "")
    return <NoWordFound errorMsg={payload} />;

  return (
    <Wrapper>
      {debouncedValue !== "" && !payloadReceived ? (
        <PageLoadingSkeleton />
      ) : (
        <>
          <WordSummary />
          <WordMeaning />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-block-start: var(--size-xl);
  display: flex;
  flex-direction: column;
`;
