import React from "react";
import { Button, Card } from "react-bootstrap";
import { useThemeHook } from "../exmple/context/global/ThemProvider";
import { useCart } from "react-use-cart";

import { BsCartPlus } from "react-icons/bs";

const ProductCard = (props) => {
  let { image, price, title } = props.data;
  const [theme] = useThemeHook();
  const { addItem } = useCart();

  const addToCart = () => {
    addItem(props.data);
  };

  return (
    <Card
      style={{ width: "16rem", height: "auto" }}
      className={`${
        theme ? "bg-light-black text-light" : "bg-light text-black"
      } text-center  overflow-hidden shadow m-2 mb-2 `}>
      <div className="img-shirt btn mt-2">
        <Card.Img variant="top" src={image} className="img-fluid" width={50} />
      </div>

      <Card.Body>
        <Card.Title className="card-title-1">{title}</Card.Title>
        <Card.Title>
          Rs. <span className="h4">${price}</span>
        </Card.Title>
        <Button onClick={() => addToCart()}>
          <BsCartPlus size="1.8rem" className="py-1" />
          Add Item
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
