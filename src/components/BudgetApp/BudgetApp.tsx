import './BudgetApp.scss';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Calculate from './Calculate/Calculate';
import Income from './Income/Income';
import Expense from './Expense/Expense';

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
                           <div className='calculate-side'>
                              <h2 className='title m-0'>BUDGET APP</h2>
                              <Calculate />
                           </div>
                        </Col>
                        <Col md={4}>
                           <div className='income-side'>
                              <Income />
                           </div>
                        </Col>
                        <Col md={4}>
                           <Expense />
                        </Col>
                     </Row>
                  </Container>
               </Card.Body>
            </Card>
         </div>
      </Container>
   )
}

export default BudgetApp;