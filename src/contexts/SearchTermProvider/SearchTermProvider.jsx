import React from "react";
import useDebounce from "../../hooks/useDebounce";
import PropTypes from "prop-types";

export const SearchTermContext = React.createContext();

const ENDPOINT = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

async function fetcher(searchTerm) {
  const query = ENDPOINT + searchTerm;

  const response = await fetch(query);

  const data = await response.json();

  return data;
}

function SearchTermProvider({ children }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [payload, setPayload] = React.useState({});

  const debouncedValue = useDebounce(searchTerm, 1000);

  React.useEffect(() => {
    async function fetchData() {
      if (debouncedValue) {
        const data = await fetcher(debouncedValue);
        setPayload(data);
      }
    }
    fetchData();
  }, [debouncedValue]);

  async function onChange(event) {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  return (
    <SearchTermContext.Provider
      value={{ searchTerm, onChange, payload, debouncedValue }}
    >
      {children}
    </SearchTermContext.Provider>
  );
}

SearchTermProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SearchTermProvider;
