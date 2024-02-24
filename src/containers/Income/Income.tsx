import './Income.scss';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

function Income() {
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

               <Button variant='success' type='submit'>Submit</Button>
            </Form>
         </div>
      </>
   )
}

export default Income;