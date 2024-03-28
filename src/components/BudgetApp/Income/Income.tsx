import './Income.scss';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import IncomeTransaction from './IncomeTransaction/IncomeTransaction';
import { useBudgetContext } from '../../../context/BudgetContext';
import { useEffect, useState } from 'react';

// income component
function Income() {
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
      {const formElement = document.querySelector('.inc-frm') as HTMLFormElement;
         formElement.reset();
      };
   }, [budgetItemInfo, budgetItems])

   return (
      <>
         <div className='income'>
            <Form className='inc-frm'>
               <FloatingLabel 
                  controlId='floatingInput' 
                  label='Add Income'
                  className='mb-4'
               >
                  <Form.Control type='text' onChange={(e) => getTextValue(e.target.value)} placeholder='carWash' />
               </FloatingLabel>    

               <FloatingLabel controlId='floatingAmount' label='0'>
                  <Form.Control type='number' onChange={(e) => getNumValue(e.target.value)} placeholder='250000' />
               </FloatingLabel>     

               <Button className='px-4' variant='success' type='button' onClick={() => inputValue && numValue ? budgetItemInfo(inputValue, numValue, 'income') : null}>Submit</Button>
            </Form>

            <div className='income-trans'>
               <h4 className='tit text-start mb-3'>Transaction History</h4>

               <IncomeTransaction />
            </div>
         </div>
      </>
   )
}

export default Income;