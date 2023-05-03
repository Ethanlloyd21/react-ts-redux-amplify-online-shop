import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import data from "../../assets/data/data.json";
import storeStocks from "../../assets/data/storeStocks";
import Cards from "../../components/Cards";

const Store = () => {
  return (
    <Container>
      <div>
        <Row
          xs={1}
          sm={1}
          md={3}
          lg={3}
          xl={3}
          className="g-4"
          style={{ paddingTop: 140, paddingBottom: 140 }}
        >
          {storeStocks.map((item, index) => (
            <Col key={index}>
              <Cards
                key={item.id}
                {...item}
                // id={item.id}
                // category={item.category}
                // brand={item.brand}
                // name={item.name}
                // price={item.price}
                // top_description={item.top_description}
                // image={item.image}
                // amount={item.amount}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Store;
