import './Calculate.scss';

function Calculate() {
   return (
      <>
         <div className='balance'>
            <h3>Your Balance</h3>
            <p>$134000</p>
         </div>
         <div className='calc-result'>
            <div className='calc-bottom d-flex flex-row justify-content-center'>
               <div className='income'>
                  <h4>Income</h4>
                  <p>+$150000</p>
               </div>
               <div className='expenses'>
                  <h4>Expenses</h4>
                  <p>+$150000</p>
               </div>
            </div>
         </div>
      </>
   )
}

export default Calculate;