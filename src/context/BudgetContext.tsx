import { createContext, useContext, ReactNode } from 'react';

type ContextProviderType = {
   children: ReactNode
}

type BudgetContextTypes = {
   incomeInfo: (income: string, amount: number) => any,
}

const BudgetContext = createContext({} as BudgetContextTypes);

export function useBudgetContext() {
   return useContext(BudgetContext);
}

export function BudgetContextProvider({ children }: ContextProviderType) {
   // const [income, setIncome] = useState([]);

   const incomeInfo = (income: string, amount: number) => {
      console.log({income: income, price: amount});
   }

   return <BudgetContext.Provider value={{
      incomeInfo,
   }}>{children}</BudgetContext.Provider>
}
