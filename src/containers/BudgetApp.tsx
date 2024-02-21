import './BudgetApp.scss';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Calculate from './Calculate/Calculate';

// budget component
function BudgetApp() {
   return (
      <Container>
         <div className='budget'>
            <Card className='card budget-box'>
               <Card.Body>
                  <Container>
                     <Row>
                        <Col md={4}>
                           <h2 className='title m-0'>BUDGET APP</h2>
                           <Calculate />
                        </Col>
                        <Col md={4}>df</Col>
                        <Col md={4}>df</Col>
                     </Row>
                  </Container>
               </Card.Body>
            </Card>
         </div>
      </Container>
   )
}

export default BudgetApp;