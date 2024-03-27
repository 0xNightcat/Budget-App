import './IncomeTransaction.scss';
import { Alert } from 'react-bootstrap';
import { useBudgetContext } from '../../../../context/BudgetContext';

// IncomeTransaction component
function IncomeTransaction() {
   const { budgetItems } = useBudgetContext();

   return (
      <>
         {budgetItems.map(item => {
            return (
               <div key={item.title} className='income-alert-item mt-2'>
                  <Alert variant='success' className='mb-0'>
                     <div className='content'>
                        <span className='title'>{item.title}</span>
                        <span className='amount'>{item.amount}</span>
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