import React, {useState} from 'react';
import {
  Container,
  Header,
  TitleHeader,
  Photo,
  Cards,
  ButtonPrev,
  ButtonNext,
  Description
} from './style';

import img01 from './images/img01.jpg';
import img02 from './images/img02.jpg';
import img03 from './images/img03.jpg';
import img04 from './images/img04.jpg';
import img05 from './images/img05.jpg';

const App = () => {
  
  /** Array de imagens */
  const images = [ img01, img02, img03, img04, img05 ];

  /** Criar duas constantes, 
   * contador: irá armazenar  o valor do contador
   * setContador: irá informar o valor do contador*/
  const [contador, setContador] = useState(0);

  /** Voltar para imagem */
  const imgPrev = () => {
    if ( contador > 0 ) setContador(contador - 1);
  }

  /** Avançar imagem */
  const imgNext = () => {
    if ( contador < images.length - 1 ) setContador(contador + 1);
  }
  
  return(
    <Container>

      <Header>
        <TitleHeader> Galeria de Fotos </TitleHeader>
      </Header>

      <Photo>
        <Cards source={images[contador]} />
      </Photo>

      <ButtonPrev onPress={imgPrev}> 
        <Description>Imagem Anterior</Description>
      </ButtonPrev>
      <ButtonNext onPress={imgNext}>
        <Description>Proxima Imagem</Description>
      </ButtonNext>

    </Container>
  );
}

export default App;