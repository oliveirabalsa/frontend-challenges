import React from "react";

import { NotFoundContainer, Title, Text  } from './styles'

const NotFound: React.FC = (props) => (
  <NotFoundContainer>
    <Title>404</Title>
    <Text>Opss... Pagina nao encontrada</Text>
  </NotFoundContainer>
);

export default NotFound;
