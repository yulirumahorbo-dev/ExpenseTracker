import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../componenta/ExpensesOutput/ExpensesOutput";

function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}

export default RecentExpenses;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
