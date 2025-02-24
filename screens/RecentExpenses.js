import { View, Text, StyleSheet } from "react-native";

function RecentExpenses() {
  return <Text style={styles.text}>Recent Expenses</Text>;
}

export default RecentExpenses;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
