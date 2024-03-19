import './IncomeTransaction.scss';
import { Alert } from 'react-bootstrap';
import { useBudgetContext } from '../../../../context/BudgetContext';

// IncomeTransaction component
function IncomeTransaction() {
   const { incomeItems } = useBudgetContext();

   return (
      <>
         {incomeItems.map(item => {
            return (
               <div key={item.income} className='income-alert-item mt-2'>
                  <Alert variant='success' className='mb-0'>
                     <div className='content'>
                        <span className='title'>{item.income}</span>
                        <span className='amount'>{item.price}</span>
                     </div>
                  </Alert>
                  <a href='#'>
                     <i className="bi bi-trash3-fill text-danger"></i>
                  </a>
               </div>
            )
         })}
      </>
   )
}

export default IncomeTransaction;