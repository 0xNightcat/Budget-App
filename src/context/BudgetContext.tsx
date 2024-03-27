import { createContext, useContext, ReactNode, useState } from 'react';

type ContextProviderType = {
   children: ReactNode
}

type BudgetItem = {
   title: string,
   amount: number,
   type: string
}

// context functions
type BudgetContextTypes = {
   budgetItemInfo: (income: string, amount: number, type: string) => void,
   budgetItems: BudgetItem[],
   // incomeAmount: number,
   // expenseAmount: number
}

// craete context
const BudgetContext = createContext({} as BudgetContextTypes);

// useContext
export function useBudgetContext() {
   return useContext(BudgetContext);
}

// context provider
export function BudgetContextProvider({ children }: ContextProviderType) {
   const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);

   // budget items function
   const budgetItemInfo = (budgetItem: string, amount: number, type: string) => {
      const existingIndex = budgetItems.findIndex(item => item.title === budgetItem);
      
      if(existingIndex !== -1) {
         setBudgetItems([...budgetItems]);
      } else {
         setBudgetItems([...budgetItems, { title: budgetItem, amount: amount, type: type }]);
      }
   }

   // income amount function
   
   
   return <BudgetContext.Provider value={{
      budgetItemInfo,
      budgetItems,
   }}>{children}</BudgetContext.Provider>
}
