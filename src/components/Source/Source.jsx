import React from "react";
import styled from "styled-components/macro";
import SectionDivider from "../primitives/SectionDivider/SectionDivider";
import { SearchTermContext } from "../../contexts/SearchTermProvider";

export default function Source() {
  const { payload } = React.useContext(SearchTermContext);

  if (!payload[0]) return null;

  const href = payload[0].sourceUrls;

  return (
    <>
      <SectionDivider />
      <SourceWrapper>
        <SourceLabel>Source</SourceLabel>
        <SourceCite>
          <SourceLink
            href={href}
            target="_blank"
          >
            {href}
          </SourceLink>
        </SourceCite>
      </SourceWrapper>
    </>
  );
}

const SourceWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 14px;
`;

const SourceLabel = styled.span`
  margin-inline-end: 20px;
  color: var(--text-subheading);
`;

const SourceCite = styled.cite`
  font-style: normal;
`;

const SourceLink = styled.a`
  &[href^="http"]::after {
    content: "";
    width: 12px;
    height: 12px;
    margin-left: 8px;
    background-image: url("/assets/images/icon-new-window.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
  }
`;
