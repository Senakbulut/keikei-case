"use client";

import { ProductCard } from "./components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { getProduct } from "@/pages/api/products";
import "./page.styled";
import { HomeWrapper } from "./page.styled";
import Link from "next/link";

export default function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct().then((data) => setProduct(data));
  }, []);

  return (
    <HomeWrapper>
      {product?.map(({ title, thumbnail, price, discountPercentage, id }) => (
        <Link href={`/products/${id}`} key={id}>
          <ProductCard
            title={title}
            thumbnail={thumbnail}
            price={price}
            discountPercentage={discountPercentage}
          />
        </Link>
      ))}
    </HomeWrapper>
  );
}
