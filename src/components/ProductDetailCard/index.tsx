import React, { useState } from "react";
import {
  Container,
  Title,
  Image,
  Row,
  Input,
  Button,
  Label,
  Flex,
  InputContainer,
  SaveButton,
} from "./styles";
import Plus from "../../assets/Plus.svg";
import Menos from "../../assets/Mask.svg";

import Placeholder from "../../assets/image-placeholder.png";
import InputLarge from "../InputLarge";
import convertPrice from "../../helpers/convertPrice";

import { gql, useMutation } from "@apollo/client";
import SnackBar from "../SnackBar";
import Loading from "../Loading/Loading";

const snackbarInitialState = {
  message: "",
  status: "",
  active: false,
};

const ProductDetailCard: React.FC = ({
  id,
  name,
  imageUrl,
  package: sizes,
  quantity,
  salePrice,
  promotionalPrice,
}: any) => {
  const [stock, setStock] = useState(quantity);
  const [price, setSalePrice] = useState(salePrice);
  const [promoPrice, setPromotionalPrice] = useState(promotionalPrice);
  const [weight, setWeight] = useState(sizes.weight);
  const [height, setHeight] = useState(sizes.height);
  const [width, setWidth] = useState(sizes.width);
  const [depth, setDepth] = useState(sizes.depth);
  const [loading, setLoading] = useState(false);
  const [snackBar, setSnackBar] = useState(snackbarInitialState);

  const handleStock = (value: number) => {
    if (value < 0) return;
    setStock(value);
  };

  const validatePrice = (price: string) => {
    return `R$${price.replace(/\D/gi, "")}`;
  };

  const handleBlur = (value: string) => {
    if (value.includes(",")) return value;
    value = value.replace("R$", "");
    const [price, cents] = convertPrice(value);

    return `R$ ${price},${cents}`;
  };

  const convertPriceToNumbers = (price: any) => {
    return Number(price.replace(/\D/gi, ""));
  };

  const handlePrice = (price: string) => {
    const priceWithValidation = validatePrice(price);
    setSalePrice(priceWithValidation);
  };

  const handlePromotionalPrice = (price: string) => {
    const priceWithValidation = validatePrice(price);
    if (!priceWithValidation) return;

    setPromotionalPrice(priceWithValidation);
  };

  const UPDATE_PRODUCT = gql`
    mutation UpdateSku(
      $id: ID!
      $name: String!
      $quantity: Int!
      $salePrice: Int!
      $promotionalPrice: Int!
      $package: JSON!
    ) {
      updateSku(
        id: $id
        name: $name
        quantity: $quantity
        salePrice: $salePrice
        promotionalPrice: $promotionalPrice
        package: $package
      ) {
        id
        name
        quantity
        salePrice
        promotionalPrice
        package
      }
    }
  `;

  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const handleUpdate = async () => {
    const priceParsed = convertPriceToNumbers(price);
    const promotionalPriceParsed = convertPriceToNumbers(promoPrice);
    setLoading(true);
    const response = await updateProduct({
      variables: {
        id,
        name,
        quantity: stock,
        salePrice: priceParsed,
        promotionalPrice: promotionalPriceParsed,
        package: {
          weight,
          height,
          width,
          depth,
        },
      },
    });
    if (response?.data?.updateSku) {
      setLoading(false);
      setSnackBar({
        status: "success",
        message: "Dados alterados com sucesso",
        active: true,
      });
      setTimeout(() => {
        setSnackBar(snackbarInitialState);
      }, 3000);
    } else {
      setLoading(false);
      setSnackBar({
        status: "error",
        message: "Falha ao atualizar os dados",
        active: true,
      });
      setTimeout(() => {
        setSnackBar(snackbarInitialState);
      }, 3000);
    }
  };

  return (
    <>
      <SnackBar {...snackBar} />
      {loading ? <Loading /> : ""}
      <Container>
        <Title>{name}</Title>
        <Image src={imageUrl ? imageUrl : Placeholder} />
        <Row>
          <Label>Estoque</Label>
          <Input value={stock} />
          <Flex>
            <Button onClick={() => handleStock(stock - 1)}>
              <img src={Menos} alt="" />
            </Button>
            <Button onClick={() => handleStock(stock + 1)}>
              <img src={Plus} alt="" />
            </Button>
          </Flex>
        </Row>
        <Row>
          <InputContainer>
            <Label>Preço de venda</Label>
            <Input
              size={100}
              value={price}
              onChange={(e) => handlePrice(e.target.value)}
              onBlur={(e) => setSalePrice(handleBlur(e.target.value))}
            />
          </InputContainer>
          <InputContainer>
            <Label>Preço promocional</Label>
            <Input
              size={100}
              value={promoPrice}
              onChange={(e) => handlePromotionalPrice(e.target.value)}
              onBlur={(e) => setPromotionalPrice(handleBlur(e.target.value))}
            />
          </InputContainer>
        </Row>
        <InputLarge
          name="Peso"
          value={weight}
          unit="kg"
          onChange={(value: any) => setWeight(value)}
        />
        <InputLarge
          name="Altura"
          value={height}
          unit="cm"
          onChange={(value: any) => setHeight(value)}
        />
        <InputLarge
          name="Largura"
          value={width}
          unit="cm"
          onChange={(value: any) => setWidth(value)}
        />
        <InputLarge
          name="Profundidade"
          value={depth}
          unit="cm"
          onChange={(value: any) => setDepth(value)}
        />
        <SaveButton onClick={() => handleUpdate()}>
          Salvar alterações
        </SaveButton>
      </Container>
    </>
  );
};

export default ProductDetailCard;
