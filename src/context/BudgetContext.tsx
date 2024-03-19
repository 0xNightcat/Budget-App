import { createContext, useContext, ReactNode, useState } from 'react';

type ContextProviderType = {
   children: ReactNode
}

type IncomeItem = {
   income: string,
   price: number
}

type BudgetContextTypes = {
   incomeInfo: (income: string, amount: number) => void,
   incomeItems: IncomeItem[]
}

const BudgetContext = createContext({} as BudgetContextTypes);

export function useBudgetContext() {
   return useContext(BudgetContext);
}

export function BudgetContextProvider({ children }: ContextProviderType) {
   const [incomeItems, setIncomeItems] = useState<IncomeItem[]>([]);

   const incomeInfo = (income: string, amount: number) => {
      setIncomeItems([...incomeItems, { income: income, price: amount }]);
   }
   
   return <BudgetContext.Provider value={{
      incomeInfo,
      incomeItems,
   }}>{children}</BudgetContext.Provider>
}
