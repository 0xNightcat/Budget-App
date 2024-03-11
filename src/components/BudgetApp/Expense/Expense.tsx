import './Expense.scss';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import ExpenseTransaction from './ExpenseTransaction/ExpenseTransaction';

function Expense() {
   return (
      <>
         <div className='expense'>
            <Form>
               <FloatingLabel 
                  controlId='floatingInput' 
                  label='Add Expense'
                  className='mb-4'
               >
                  <Form.Control type='text' placeholder='carWash' />
               </FloatingLabel>    

               <FloatingLabel controlId='floatingAmount' label='0'>
                  <Form.Control type='number' placeholder='250000' />
               </FloatingLabel>     

               <Button className='px-4' variant='danger' type='submit'>Submit</Button>
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