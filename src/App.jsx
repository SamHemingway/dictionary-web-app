import GlobalStyle from "./styles/globalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import WordSearch from "./components/WordSearch/WordSearch";
import Result from "./components/Result/Result";
import Source from "./components/Source/Source";
import SearchTermProvider from "./contexts/SearchTermProvider/SearchTermProvider";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <SearchTermProvider>
        <main>
          <WordSearch />
          <Result />
          <Source />
        </main>
      </SearchTermProvider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  inline-size: clamp(20.44rem, calc(11.41rem + 38.5vw), 46.06rem);
  margin-inline: auto;
  margin-block: var(--size-m);
`;
