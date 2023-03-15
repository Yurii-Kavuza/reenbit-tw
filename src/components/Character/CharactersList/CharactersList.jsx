
import { useLocation } from 'react-router-dom';
import { CharacterGeneral } from '../CharacterGeneral';
import { List, NavItem } from './CharactersList.styled';


export const CharactersList = ({ characters }) => {
  const location = useLocation();

  return (
    <List >
      {characters.map(({ id, name, species, image }) => (
        <li key={id}>
          <NavItem
            to={`/characters/${id}`}
            state={{ from: location }}
          >
           <CharacterGeneral name={name} species={species} image={image}/>
          </NavItem>
        </li>
      ))}
    </List>
  );
};