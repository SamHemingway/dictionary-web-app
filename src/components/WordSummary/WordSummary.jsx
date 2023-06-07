import React from "react";
import styled from "styled-components/macro";
import { SearchTermContext } from "../../contexts/SearchTermProvider/SearchTermProvider";
import AudioButton from "../AudioButton/AudioButton";

export default function WordSummary() {
  const { payload } = React.useContext(SearchTermContext);

  const wordTitle = payload[0]?.word;
  const phonetic = payload[0]?.phonetic;
  const audioSrc = payload[0]?.phonetics.find((entry) => entry.audio)?.audio;

  return (
    <Wrapper>
      {payload[0] && (
        <>
          <Word>
            <Title>{wordTitle}</Title>
            <Phonetic>{phonetic}</Phonetic>
          </Word>
          {audioSrc && (
            <Audio>
              <AudioButton src={audioSrc} />
            </Audio>
          )}
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`;

const Word = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  color: var(--text-heading);
  font-size: var(--font-size-xl);
`;

const Phonetic = styled.span`
  font-size: var(--font-size-l);
  color: var(--colour-accent);
`;

const Audio = styled.div`
  margin-inline-start: auto;
`;
