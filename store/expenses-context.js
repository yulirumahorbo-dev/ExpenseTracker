import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 354000,
    date: new Date("2025-2-25"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 129000,
    date: new Date("2025-2-24"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 20000,
    date: new Date("2025-2-23"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 150000,
    date: new Date("2025-2-22"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 350000,
    date: new Date("2025-2-21"),
  },
  {
    id: "e6",
    description: "A pair of trousers",
    amount: 275000,
    date: new Date("2025-2-20"),
  },
  {
    id: "e7",
    description: "Some bananas",
    amount: 23000,
    date: new Date("2025-2-19"),
  },
  {
    id: "e8",
    description: "A book",
    amount: 113400,
    date: new Date("2025-2-19"),
  },
  {
    id: "e9",
    description: "Another book",
    amount: 87000,
    date: new Date("2025-2-4"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
