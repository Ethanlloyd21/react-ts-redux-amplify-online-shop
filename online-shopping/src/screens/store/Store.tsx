
import { Row, Col, Container } from "react-bootstrap";
import Cards from "../../components/Cards";
import { useAppSelector } from "../../hooks/hooks";
import { CartItemProps } from "../../state/typesofCart";

const Store = () => {

  // const { storeInventory } = useSelector((state: any) => state.store);
  // const dispath = useDispatch();

  const { storeInventory } = useAppSelector((state) => state.store)

  return (
    <Container>
        <Row
          xs={1}
          sm={1}
          md={3}
          lg={3}
          xl={3}
          className="g-4"
          style={{ paddingTop: 140, paddingBottom: 140 }}
        >
          {storeInventory.map((item: CartItemProps, index: number) => (
            <Col key={index}>
              <Cards
                key={item.id}
                {...item}
              />
            </Col>
          ))}
        </Row>
    </Container>
  );
};

export default Store;
