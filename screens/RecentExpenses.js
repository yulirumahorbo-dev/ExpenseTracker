import { View, Text, StyleSheet } from "react-native";

function RecentExpenses() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Recent Expenses</Text>
    </View>
  );
}

export default RecentExpenses;

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
