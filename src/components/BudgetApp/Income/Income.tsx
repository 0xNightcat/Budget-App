import './Income.scss';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import IncomeTransaction from './IncomeTransaction/IncomeTransaction';
import { useBudgetContext } from '../../../context/BudgetContext';

function Income() {
   const { incomeInfo } = useBudgetContext();

   return (
      <>
         <div className='income'>
            <Form>
               <FloatingLabel 
                  controlId='floatingInput' 
                  label='Add Income'
                  className='mb-4'
               >
                  <Form.Control type='text' placeholder='carWash' />
               </FloatingLabel>    

               <FloatingLabel controlId='floatingAmount' label='0'>
                  <Form.Control type='number' placeholder='250000' />
               </FloatingLabel>     

               <Button className='px-4' variant='success' type='button' onClick={() => incomeInfo('test', 2222)}>Submit</Button>
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