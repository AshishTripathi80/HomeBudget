import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, FlatList } from "react-native";

const BudgetEntryListing = () => {
  const budgetEntries = useSelector((state) => state.budgetEntryReducer);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.amount}>Planned amount: {item.plannedAmount}</Text>
      <Text style={styles.amount}>Actual amount: {item.actualAmount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Entry Listing</Text>
      <FlatList
        data={budgetEntries}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default BudgetEntryListing;
