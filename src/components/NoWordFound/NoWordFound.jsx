import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

function NoWordFound({ errorMsg }) {
  return (
    <Wrapper>
      <Emoji>😕</Emoji>
      <Subheading>{errorMsg.title}</Subheading>
      <Resolution>
        {errorMsg.message} {errorMsg.resolution}
      </Resolution>
    </Wrapper>
  );
}

NoWordFound.propTypes = {
  errorMsg: PropTypes.object.isRequired,
};

const Wrapper = styled.section`
  padding-block-start: var(--size-3xl);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Emoji = styled.h1`
  font-size: var(--font-size-xxl);
  margin-block-end: var(--size-l);
`;

const Subheading = styled.h2`
  font-size: var(--font-size-l);
  margin-block-end: var(--size-s);
`;

const Resolution = styled.p`
  font-size: var(--font-size-m);
  color: var(--text-subheading);
  text-align: center;
`;

export default NoWordFound;
