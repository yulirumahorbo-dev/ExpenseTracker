import { View, Text, StyleSheet } from "react-native";

function ManageExpense() {
  return <Text style={styles.text}>Manage Expense</Text>;
}

export default ManageExpense;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
