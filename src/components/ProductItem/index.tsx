import { Button, Card, Col } from "react-bootstrap"
import useCartStore from "../../store/cart"

export type ProductProps = {
  product: ProductType
}

export type ProductType = {
  id: number
  name: string
}
 
export default function ProductItem({ product }: ProductProps) {
  const { addProduct } = useCartStore();

  return (
    <Col className="col-md-3 mb-4" key={product.id}>
      <Card>
        <Card.Body className="d-grid">
          <Card.Title>{product.name}</Card.Title> 
          <Button variant="primary" onClick={() => addProduct(product)}>+</Button>
        </Card.Body>
      </Card>    
    </Col> 
  )
}