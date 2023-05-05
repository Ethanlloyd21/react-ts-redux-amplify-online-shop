import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import storeStocks from "../../assets/data/storeStocks";
import Cards from "../../components/Cards";
import { useDispatch, useSelector } from "react-redux";

const Store = () => {

  const { storeInventory } = useSelector((state: any) => state.store);
  const dispath = useDispatch();

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
          {storeInventory.map((item: any, index: React.Key | null | undefined) => (
            <Col key={index}>
              <Cards
                key={item.id}
                {...item}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Store;
