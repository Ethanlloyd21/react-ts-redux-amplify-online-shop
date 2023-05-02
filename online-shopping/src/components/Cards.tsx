import React from "react";
import { Button, Image } from "react-bootstrap";

interface Props {
  id: string;
  category: string;
  brand: string;
  name: string;
  price: number;
  top_description: string;
  image: string;
}

const Cards: React.FC<Props> = ({
  id,
  category,
  brand,
  name,
  price,
  top_description,
  image,
}) => {
  return (
    <div className="card" id="item-card">
      <Image src={image} className="card-img-top" alt={`card-${id}`} fluid/>
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
      <div style={{ display: "flex", alignContent: "center", justifyContent: "center", justifyItems: "center" }} className='text-center'>
        <Button className="rounded-style" variant="outline-primary">
          Buy
        </Button>
      </div>
    </div>
  );
};

export default Cards;
