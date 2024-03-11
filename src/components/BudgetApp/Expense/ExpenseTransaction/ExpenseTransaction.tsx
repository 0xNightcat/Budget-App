import './ExpenseTransaction.scss';
import { Alert } from 'react-bootstrap';

function ExpenseTransaction() {
   return (
      <>
         <div className='expense-alert-item'>
            <Alert variant='danger' className='mb-0'>
               <div className='content'>
                  <span className='title'>Car Sold</span>
                  <span className='amount'>$15000</span>
               </div>
            </Alert>
            <a href='#'>
               <i className="bi bi-trash3-fill text-danger"></i>
            </a>
         </div>
      </>
   )
}

export default ExpenseTransaction;