import './Expense.scss';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import ExpenseTransaction from './ExpenseTransaction/ExpenseTransaction';
import { useBudgetContext } from '../../../context/BudgetContext';
import { useEffect, useState } from 'react';

// expense component
function Expense() {
   let [inputValue, setinputValue] = useState<string>('');
   let [numValue, setnumValue] = useState<number>(0);

   const { budgetItemInfo, budgetItems } = useBudgetContext();

   function getTextValue(val: string) {
      setinputValue(val);
   }

   function getNumValue(num: any) {
      setnumValue(num);
   }

   useEffect(() => {
      setinputValue('');
      setnumValue(0);
      {const formElement2 = document.querySelector('.expe-frm') as HTMLFormElement;
      formElement2.reset();
      };
   }, [budgetItemInfo, budgetItems])

   return (
      <>
         <div className='expense'>
            <Form className='expe-frm'>
               <FloatingLabel 
                  controlId='floatingInput' 
                  label='Add Expense'
                  className='mb-4'
               >
                  <Form.Control type='text' onChange={(e) => getTextValue(e.target.value)} placeholder='carWash' />
               </FloatingLabel>    

               <FloatingLabel controlId='floatingAmount' label='0'>
                  <Form.Control type='number' onChange={(e) => getNumValue(e.target.value)} placeholder='250000' />
               </FloatingLabel>     

               <Button className='px-4' variant='danger' type='button' onClick={() => inputValue && numValue ? budgetItemInfo(inputValue, numValue, 'expense') : null}>Submit</Button>
            </Form>

            <div className='expense-trans'>
               <h4 className='tit text-start mb-3'>Transaction History</h4>

               <ExpenseTransaction />
            </div>
         </div>
      </>
   )
}

export default Expense;