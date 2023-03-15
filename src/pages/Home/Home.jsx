import { CharactersSection } from "../../components/CharactersSection/CharactersSection";
import { Container, PictureContainer } from "./Home.styled";

export const Home = ()=>{

    return (
        <Container>
            <PictureContainer>
            <picture>
                <source  srcSet="/reenbit-tw/images/logoImage-tab-min.png 1x, /reenbit-tw/images/logoImage-tab-2x-min.png 2x" media="(min-width: 768px)"/>
                <source  srcSet="/reenbit-tw/images/logoImage-mob-min.png 1x, /reenbit-tw/images/logoImage-mob-2x-min.png 2x" media="(min-width: 320px)"/>
                <img src="/reenbit-tw/images/logoImage-tab-min.png" alt="Rick and Morty banner"/>
            </picture>
            </PictureContainer>
           <CharactersSection/>
        </Container>
    );    
}