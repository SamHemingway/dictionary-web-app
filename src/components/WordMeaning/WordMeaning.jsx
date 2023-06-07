import React from "react";
import styled from "styled-components/macro";
import { SearchTermContext } from "../../contexts/SearchTermProvider/SearchTermProvider";

export default function WordMeaning() {
  const { payload } = React.useContext(SearchTermContext);

  return (
    <Wrapper>
      {payload[0]?.meanings.map((entry, index) => {
        return (
          <article key={index}>
            <DividerContainer>
              <PartOfSpeech>{entry.partOfSpeech}</PartOfSpeech>
              <HorizontalDivider />
            </DividerContainer>
            <Subheader>Meaning</Subheader>
            <DefinitionList>
              {entry.definitions.map((entry, index) => {
                return (
                  <React.Fragment key={index}>
                    <DefinitionItem>{entry.definition}</DefinitionItem>
                    {entry.example && (
                      <Example>
                        <ExampleQuote>{entry.example}</ExampleQuote>
                      </Example>
                    )}
                  </React.Fragment>
                );
              })}
            </DefinitionList>
            {entry.synonyms[0] && (
              <SynonymWrapper>
                <Subheader style={{ display: "inline" }}>Synonyms</Subheader>
                <SynonymList>
                  {entry.synonyms.map((entry, index) => {
                    return <SynonymItem key={index}>{entry}</SynonymItem>;
                  })}
                </SynonymList>
              </SynonymWrapper>
            )}
          </article>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-s);
  margin-block: var(--size-l);
`;

const PartOfSpeech = styled.h2`
  font-size: var(--font-size-l);
  font-style: italic;
`;

const HorizontalDivider = styled.hr`
  border: 0.5px solid var(--background-hr);
  inline-size: 100%;
`;

const Subheader = styled.h3`
  margin-block-end: var(--size-s);
  font-weight: var(--font-weight-regular);
  color: var(--text-subheading);
  font-size: var(--font-size-m);
`;

const DefinitionList = styled.ul`
  padding-inline-start: 1rem;
  margin-block-end: var(--size-s);
`;

const DefinitionItem = styled.li`
  margin-block-end: 12px;
  padding-inline: 12px;

  &::marker {
    color: var(--colour-accent);
  }
`;

const SynonymWrapper = styled.div`
  display: flex;
  gap: var(--size-s);
`;

const SynonymList = styled.ul`
  display: flex;
  align-items: baseline;
  padding-inline-start: 0;
  flex-wrap: wrap;
  gap: 8px;
`;

const SynonymItem = styled.li`
  list-style: none;
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  color: var(--colour-accent);
`;

const ExampleQuote = styled.blockquote`
  font-style: italic;

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`;

const Example = styled.li`
  color: var(--text-subheading);
  padding-inline: 12px;
  margin-block-end: 12px;

  &::marker {
    color: transparent;
  }
`;
