import React from "react";
import { Title } from "./styles";
import { useQuery, gql } from "@apollo/client";

import ProductDetails from "../../views/pages/ProductDetails/ProductDetails";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";

const GET_PRODUCTS = gql`
  query {
    allSkus {
      id
      name
      ean
      category
      imageUrl
      description
      salePrice
      promotionalPrice
      quantity
    }
  }
`;

const convertPrice = (price: string) => {
  price = price.toString();

  const priceLength = price.length;

  return [price.slice(0, price.length - 2), price.slice(priceLength - 2)];
};

const handleProducts = (data: any) => {
  const response = [];
  for (let product of data) {
    let price = product.salePrice;
    let promotionalPrice = product.promotionalPrice;

    const [value, cents] = convertPrice(price);
    const [promotionalValue, promotionalCents] = convertPrice(promotionalPrice);
    const productParsed = {
      ...product,
      value,
      cents,
      promotionalValue,
      promotionalCents,
    };

    response.push(<ProductCard key={product.id} {...productParsed} />);
  }
  return response;
};

const Home: React.FC = (props) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  return (
    <div>
      <Title>Produtos</Title>

      {loading ? <Loading /> : handleProducts(data.allSkus)}
    </div>
  );
};

export default Home;
