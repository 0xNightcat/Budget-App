import './ExpenseTransaction.scss';
import { Alert } from 'react-bootstrap';
import { useBudgetContext } from '../../../../context/BudgetContext';

// ExpenseTransaction component
function ExpenseTransaction() {
   const { budgetItems, removeItem } = useBudgetContext();
   const expenseItems = budgetItems.filter(item => item.type === 'expense');

   return (
      <>
         {expenseItems.map(item => {
            return (
               <div key={item.title} className='expense-alert-item mt-2'>
                  <Alert variant='danger' className='mb-0'>
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

export default ExpenseTransaction;