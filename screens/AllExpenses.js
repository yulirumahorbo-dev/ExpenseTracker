import { View, Text, StyleSheet } from "react-native";

function AllExpenses() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>All Expense</Text>
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "cente",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
