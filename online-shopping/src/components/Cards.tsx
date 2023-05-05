import React from "react";
import { Button, Image } from "react-bootstrap";
import { CartItemProps } from "../state/typesofCart";

//Readux toolkit
import { addtoCart } from "../redux/features/cart/cartSlice"
import { useAppDispatch } from "../hooks/hooks";

const Cards: React.FC<CartItemProps> = ({
  id,
  category,
  brand,
  name,
  price,
  top_description,
  image,
  amount,
}) => {

  const dispatch = useAppDispatch();
  
  const itemSelected = { id: id, category: category, brand: brand, name: name, price: price, top_description: top_description, image: image, amount: amount };

  return (
    <div className="card" id="item-card">
      <Image src={image} className="card-img-top" alt={`card-${id}`} fluid />
      <div
        className="card-body"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      />
      <div className="card-body-alignment">
        <h5 className="card-title">{top_description}</h5>
        <h2 style={{ fontWeight: 600 }}>{name}</h2>
        <p>${price}</p>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
        className="text-center"
      >
        <Button className="rounded-style" variant="outline-primary" onClick={() => dispatch(addtoCart(itemSelected)) }>
          Buy
        </Button>
      </div>
    </div>
  );
};

export default Cards;
