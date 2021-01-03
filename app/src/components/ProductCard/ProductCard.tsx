import React from "react";
import { useHistory } from 'react-router-dom'
import {
  Container,
  PhotoContainer,
  ProductDataContainer,
  Name,
  Value,
  Cents,
  Image,
  PriceContainer,
  PromotionalPrice,
  Strike,
} from "./styles";
import { ProductCardProps } from './types'

import Placeholder from "../../assets/image-placeholder.png";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageUrl,
  name,
  promotionalPrice,
  salePrice,
  value,
  cents,
  promotionalValue,
  promotionalCents,
}: ProductCardProps) => {
  const history = useHistory()
  return (
    <Container onClick={() => history.push(`/product/${id}`)}>
      <PhotoContainer>
        <Image src={imageUrl ? imageUrl : Placeholder} alt="" />
      </PhotoContainer>
      <ProductDataContainer>
        <Name>{name}</Name>
        <PriceContainer>
          {promotionalPrice &&
          promotionalPrice !== salePrice ? (
            <PromotionalPrice>
              1 x R${" "}
              <Strike>
                {value},{cents}
              </Strike>{" "}
              por R$ {promotionalValue},{promotionalCents}
            </PromotionalPrice>
          ) : (
            <>
              <Value>1 X R$ {value},</Value>
              <Cents>{cents}</Cents>
            </>
          )}
        </PriceContainer>
      </ProductDataContainer>
    </Container>
  );
};

export default ProductCard;
