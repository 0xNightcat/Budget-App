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
   incomeAmount: () => number,
   expenseAmount: () => number,
   balanceAmount: () => number,
   removeItem: (title: string) => void
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
   const incomeAmount = () => {
      let incomeSum = 0;
      const incomeItems =  budgetItems.filter(item => item.type === 'income');
      incomeItems.forEach(item => {
         incomeSum += Number(item.amount);
      })

      return incomeSum;
   }

   // income amount function
   const expenseAmount = () => {
      let expenseSum = 0;
      const expenseItems =  budgetItems.filter(item => item.type === 'expense');
      expenseItems.forEach(item => {
         expenseSum += Number(item.amount);
      })

      return expenseSum;
   }

   // balance amount function
   const balanceAmount = () => {
      let balance = 0;

      balance = incomeAmount() - expenseAmount();

      return balance;
   }

   // remove item
   const removeItem = (title: string) => {
      const newBudgetItems = budgetItems.filter(item => item.title !== title);
      setBudgetItems([...newBudgetItems]);
   }
   
   
   return <BudgetContext.Provider value={{
      budgetItemInfo,
      budgetItems,
      incomeAmount,
      expenseAmount,
      balanceAmount,
      removeItem
   }}>{children}</BudgetContext.Provider>
}
