import { View, Text, StyleSheet } from "react-native";

function ManageExpense() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Manage Expense</Text>
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
