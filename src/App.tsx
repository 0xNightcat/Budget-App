import './App.scss';
import BudgetApp from './components/BudgetApp/BudgetApp';
import { BudgetContextProvider } from './context/BudgetContext';

// app component
function App() {
  return (
    <BudgetContextProvider>
      <div className='app'>
        <h1>Budget App</h1>
        <BudgetApp />
      </div>
    </BudgetContextProvider>
  )
}

export default App
