import React from "react";
import { useQuery, gql } from "@apollo/client";
import Loading from "../../components/Loading/Loading";
import ProductDetailCard from "../../components/ProductDetailCard";
import BackIcon from "../../assets/Icon.svg";
import { Title, IconContainer } from "./styles";
import { useHistory, useParams } from "react-router-dom";
import convertPrice from "../../helpers/convertPrice";

const ProductDetails: React.FC = (props) => {
  const history = useHistory();
  const { id }: any = useParams();

  const GET_PRODUCTS = gql`
  query {
    allSkus(filter: { id: ${id} }) {
      id
      name
      package
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

  const handlePrice = (price: any) => {
    const [value, cents] = convertPrice(price);
    return `R$ ${value},${cents}`;
  };

  const handleProducts = (product: any) => {
    const salePrice = handlePrice(product.salePrice);
    const promotionalPrice = handlePrice(product.promotionalPrice);

    const products = { ...product, salePrice, promotionalPrice };

    return <ProductDetailCard {...products} />;
  };

  const { loading, data } = useQuery(GET_PRODUCTS);

  return (
    <>
      <Title onClick={() => history.goBack()}>
        <IconContainer>
          <img src={BackIcon} alt="" />
        </IconContainer>
        Produtos
      </Title>
      {loading ? <Loading /> : handleProducts(data.allSkus[0])}
    </>
  );
};

export default ProductDetails;
