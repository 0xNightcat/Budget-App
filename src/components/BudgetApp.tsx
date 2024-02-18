import './BudgetApp.scss';
import { Card } from 'react-bootstrap';

// budget component
const BudgetApp = function() {
   return (
      <div className='budget'>
         <Card className='card'>
            <Card.Body>
               <h2>Budget Area</h2>
            </Card.Body>
         </Card>
      </div>
   )
}

export default BudgetApp;