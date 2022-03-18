import { Button, Col, Row } from "react-bootstrap";
import useCartStore from "../../store/cart";

export default function Header() {
  const { toggle } = useCartStore();

  return (
    <Row className="py-4 ">
      <Col className="col-6 col-md-8">
        <h3>Products List</h3> 
      </Col> 
      <Col className="col-6 col-md-4 text-end">
        <Button variant="primary" size="sm" onClick={() => toggle()}>My Order</Button>
      </Col>
    </Row> 
  )
}