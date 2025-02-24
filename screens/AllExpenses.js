import { View, Text, StyleSheet } from "react-native";

function AllExpenses() {
  return <Text style={styles.text}>All Expense</Text>;
}

export default AllExpenses;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
