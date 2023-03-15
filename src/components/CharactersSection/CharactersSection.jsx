import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCharacters, fetchContactBySearchedName } from "../../services/fetchCharactersApi";
import Box from "../Box";
import { CharactersList } from "../Character/CharactersList/CharactersList";
import { SearchBar } from "../SeachBar";

export const CharactersSection = ()=>{
    const [characters, setCharacters] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
  const searchedWord = searchParams.get('query') ?? '';
  const [value, setValue] = useState(searchedWord);

  const updateQueryString =query => {
    setValue(query);
    setSearchParams({ query: value });
  };


  useEffect(() => {
    if (!searchedWord) {
      fetchCharacters()
      .then(setCharacters)
      .catch(error => console.log(error));
    }

    fetchContactBySearchedName(searchedWord)
      .then(setCharacters)
      .catch(error => {
        console.log(error)
        setCharacters([]);
      });
  }, [searchedWord]);

    return (
    <>
    <Box mb={4} mx="auto">
        <SearchBar
        value={value}
        onChange={updateQueryString}
      />
      </Box>
      
      <div>{characters.length!==0 ? <CharactersList characters={characters} />: "There is no characters matching your search"}</div>
    </>
    );

};