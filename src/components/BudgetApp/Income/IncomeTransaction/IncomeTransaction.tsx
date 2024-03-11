import './IncomeTransaction.scss';
import { Alert } from 'react-bootstrap';

function IncomeTransaction() {
   return (
      <>
         <div className='alert-item'>
            <Alert variant='success' className='mb-0'>
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

export default IncomeTransaction;