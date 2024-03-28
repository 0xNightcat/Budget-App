import './Calculate.scss';
import { useBudgetContext } from '../../../context/BudgetContext';

// calculate component
function Calculate() {
   const { incomeAmount, expenseAmount, balanceAmount } = useBudgetContext();

   return (
      <>
      <div className='calculate'>
         <div className='balance'>
            <h2 className='title'>Your Balance</h2>
            <p className='amount mt-3'>${balanceAmount()}</p>
         </div>
         <div className='calc-result'>
            <div className='calc-bottom d-flex flex-row justify-content-center'>
               <div className='income-calc'>
                  <h2 className='title'>Income</h2>
                  <p className='amount mt-3'>+${incomeAmount()}</p>
               </div>
               <div className='expenses-calc'>
                  <h2 className='title'>Expenses</h2>
                  <p className='amount mt-3'>-${expenseAmount()}</p>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}

export default Calculate;