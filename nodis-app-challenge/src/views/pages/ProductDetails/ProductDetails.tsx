import React from "react";
import { useQuery, gql } from "@apollo/client";
import Loading from "../../../components/Loading/Loading";

const GET_PRODUCTS = gql`
  query {
    allSkus(filter: {id: 1}) {
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

const ProductDetails: React.FC = (props) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  return (
    <>{loading ? <Loading /> : <div className="ProductDetails">{data.allSkus[0].name}</div>}</>
  );
};

export default ProductDetails;
