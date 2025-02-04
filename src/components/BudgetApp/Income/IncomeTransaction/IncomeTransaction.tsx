import './IncomeTransaction.scss';
import { Alert } from 'react-bootstrap';
import { useBudgetContext } from '../../../../context/BudgetContext';

// IncomeTransaction component
function IncomeTransaction() {
   const { budgetItems, removeItem } = useBudgetContext();
   const incomeItems = budgetItems.filter(item => item.type === 'income');

   return (
      <>
         {incomeItems.map(item => {
            return (
               <div key={item.title} className='income-alert-item mt-2'>
                  <Alert variant='success' className='mb-0'>
                     <div className='content'>
                        <span className='title'>{item.title}</span>
                        <span className='amount'>{item.amount}</span>
                     </div>
                  </Alert>
                  <a href='#' onClick={() => removeItem(item.title)}>
                     <i className="bi bi-trash3-fill text-danger"></i>
                  </a>
               </div>
            )
         })}
      </>
   )
}

export default IncomeTransaction;