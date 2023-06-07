export default function linearInterpolation(
  lowerBoundary,
  upperBoundary,
  minVp = 375,
  maxVp = 768
) {
  function convertToREM(pixel) {
    return pixel / 16;
  }

  const lowerBoundaryRem = convertToREM(lowerBoundary);
  const upperBoundaryRem = convertToREM(upperBoundary);
  const minVpRem = convertToREM(minVp);
  const maxVpRem = convertToREM(maxVp);

  const slope = (upperBoundaryRem - lowerBoundaryRem) / (maxVpRem - minVpRem);

  const yIntercept = lowerBoundaryRem - slope * minVpRem;

  return `clamp(${lowerBoundaryRem}rem, ${
    slope * 100
  }vw + ${yIntercept}rem, ${upperBoundaryRem}rem)`;
}
