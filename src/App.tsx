import { Container, Row } from 'react-bootstrap';

import Cart from './components/Cart';
import Header from './components/Header';
import ProductItem from './components/ProductItem'; 
import { products } from './mock/products';
 
function App() { 
  const renderList = products.map(product => (
    <ProductItem key={product.id} product={product} />
  ))

  return ( 
    <Container fluid >
      <Cart />
      <Container>
        <Header />
        <Row>
          { renderList }
        </Row>
      </Container> 
    </Container>
  );
}

export default App;
