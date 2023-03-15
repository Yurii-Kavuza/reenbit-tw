import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async () => {
  const response = await axios.get();
  const sortResp = response.data.results.sort((a, b) => a.name.localeCompare(b.name))
  return sortResp;
};

export const fetchContactBySearchedName = async name => {
  const response = await axios.get(`/?name=${name}`);
  const sortResp = response.data.results.sort((a, b) => a.name.localeCompare(b.name))
  console.log(sortResp);
  return sortResp;
};
