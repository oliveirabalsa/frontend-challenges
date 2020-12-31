import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 5px auto;
  display: flex;
`;

export const PhotoContainer = styled.div`
  width: 20%;
`;
export const ProductDataContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
`;
export const Name = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
export const Image = styled.img`
  width: 80%;
  height: 70%;
  border: 1px solid #ccc;
  display: flex;
  margin: 18% 0 10% 11px;
`;
export const Value = styled.span`
  margin-top: 8px;
  color: rgb(33, 43, 54);
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`;

export const Cents = styled.span`
  position: absolute;
  color: rgb(33, 43, 54);
  font-size: 7px;
  font-weight: 400;
  line-height: 20px;
`;

export const PriceContainer = styled.div``;

export const PromotionalPrice = styled.span`
  margin-top: 8px;
  color: rgb(33, 43, 54);
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;`

export const Strike = styled.span`
  text-decoration: line-through;
  color: rgba(99, 115, 129, 1);
`
