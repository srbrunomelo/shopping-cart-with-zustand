import { Button, Col } from "react-bootstrap";
import useCartStore from "../../store/cart";
import { ProductProps } from "../ProductItem";

export default function CartItem({ product }: ProductProps) {
  const { remove } = useCartStore();

  return (
    <Col className="col-12 d-flex justify-content-between pt-2 pb-2" style={{ borderBottom: '1px solid #DDD' }}>
      <strong>{product.name}</strong>
      <Button variant="danger" size="sm" onClick={() => remove(product)}>x</Button> 
    </Col>
  )
}