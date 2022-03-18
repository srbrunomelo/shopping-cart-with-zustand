import { Fragment } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import useCartStore from "../../store/cart";

import CartItem from "../CartItem/CartItem";
import { ProductType } from "../ProductItem";
 
export default function Cart() {  
  const { open, products, toggle } = useCartStore();

  const isEmpty = products.length === 0

  const productList = products.map((product: ProductType) => (
    <CartItem key={product.id} product={product} />
  ))

  const renderList = isEmpty ? ( <Col>no items added</Col>  ) : productList
 
  return (
    <Fragment>  
      <Offcanvas show={open} onHide={() => toggle()} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Order</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            { renderList }  
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  )
} 