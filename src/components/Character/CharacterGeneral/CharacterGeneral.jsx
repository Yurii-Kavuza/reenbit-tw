import {
  Creature,
  ImageContainer,
  Image,
  Name,
} from './CharacterGeneral.styled';

export const CharacterGeneral = ({ name, species, image }) => {
  return (
    <>
      <ImageContainer>
        <Image src={image} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Creature>{species}</Creature>
    </>
  );
};
