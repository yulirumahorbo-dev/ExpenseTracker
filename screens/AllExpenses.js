import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../componenta/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
  return <ExpensesOutput expensesPeriod="Total" />;
}

export default AllExpenses;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
