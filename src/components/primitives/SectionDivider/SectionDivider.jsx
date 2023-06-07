import styled from "styled-components/macro";
import PropTypes from "prop-types";

function SectionDivider({ orientation = "horizontal" }) {
  if (orientation === "horizontal") return <HorizontalDivider />;
  if (orientation === "vertical") return <VerticalDivider />;
}

SectionDivider.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};

SectionDivider.defaultProp = {
  orientation: "horizontal",
};

const HorizontalDivider = styled.hr`
  border: 0.5px solid var(--background-hr);
  inline-size: 100%;
  margin-block: var(--size-xl);
`;

const VerticalDivider = styled.hr`
  border: 0.5px solid var(--background-hr);
  block-size: 100%;
`;

export default SectionDivider;
