import React from "react";
import { Title } from "./styles";
import { useQuery, gql } from "@apollo/client";

import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import convertPrice from '../../helpers/convertPrice'

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

const handleProducts = (data: any) => {
  const response = [];
  for (const product of data) {
    const price = product.salePrice;
    const promotionalPrice = product.promotionalPrice;

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
  const { loading, data } = useQuery(GET_PRODUCTS);
  return (
    <div>
      <Title>Produtos</Title>

      {loading ? <Loading /> : handleProducts(data.allSkus)}
    </div>
  );
};

export default Home;
