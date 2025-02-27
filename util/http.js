import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expensetracker-ab272-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
