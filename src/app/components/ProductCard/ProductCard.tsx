import React from "react";
import {
  CardWrapper,
  CardImg,
  CardPrice,
  CardImgWrapper,
} from "./ProductCard.styled";

interface productCard {
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
}

export const ProductCard = (props: productCard) => {
  return (
    <CardWrapper>
      <CardImgWrapper>
        <CardImg src={props.thumbnail} alt="product" />
      </CardImgWrapper>
      <h3>{props.title}</h3>
      <CardPrice>
        <h4>{props.discountPercentage} % </h4>
        <h3>{props.price} TL</h3>
      </CardPrice>
    </CardWrapper>
  );
};
