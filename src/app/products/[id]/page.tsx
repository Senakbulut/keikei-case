"use client";
import React, { useEffect, useState } from "react";
import {
  DetailWrapper,
  DetailContainer,
  DetailImg,
  DetailInfoContainer,
  DetailPrice,
  DetailHeader,
  DetailFavButton,
  DetailFavIcon,
} from "./page.styled";
import { getSingleProduct } from "@/pages/api/products";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FavoriteHeart, NotFavoriteHeart } from "@/app/globals";

interface Product {
  params: {
    id: string;
  };
}

function Detail({ params }: Product) {
  const [productDetail, setProductDetail] = useState({
    id: 1,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    stock: 0,
    brand: "",
    images: [""],
  });
  
  const [isFavorite, setIsFavorite] = useState(
    (typeof window !== "undefined" &&
      JSON.parse(
        window.localStorage.getItem(JSON.stringify(params.id)) as string
      ))
  );

  useEffect(() => {
    const favorite = window.localStorage.getItem(JSON.stringify(params.id));
    if (favorite !== null) setIsFavorite(JSON.parse(favorite));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      JSON.stringify(params.id),
      JSON.stringify(isFavorite)
    );
  }, [isFavorite]);

  useEffect(() => {
    getSingleProduct(params.id).then((data) => setProductDetail(data));
  }, []);

  return (
    <DetailWrapper>
      <DetailContainer>
        <Carousel showThumbs={false}>
          {productDetail?.images.map((img, i) => (
            <DetailImg src={img} key={i} alt="detail" />
          ))}
        </Carousel>
        <DetailInfoContainer>
          <DetailHeader>
            <h2>{productDetail?.title}</h2>
            <DetailFavButton onClick={() => setIsFavorite(!isFavorite)}>
              {isFavorite ? (
                <DetailFavIcon src={FavoriteHeart} alt="favorite" />
              ) : (
                <DetailFavIcon src={NotFavoriteHeart} alt="favorite" />
              )}
            </DetailFavButton>
          </DetailHeader>
          <h5 className="brand">{productDetail?.brand}</h5>
          <DetailPrice>
            <h5>Discount! {productDetail?.discountPercentage}%</h5>
            <h3>{productDetail?.price}TL</h3>
          </DetailPrice>
          <h4>Stock Quantity: {productDetail?.stock}</h4>
          <p>{productDetail?.description}</p>
        </DetailInfoContainer>
      </DetailContainer>
    </DetailWrapper>
  );
}
export default Detail;
