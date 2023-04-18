import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { addBudgetEntry } from "../actions/budgetEntryActions";

const BudgetEntry = ({ navigation }) => {
  const [name, setName] = useState("");
  const [plannedAmount, setPlannedAmount] = useState("");
  const [actualAmount, setActualAmount] = useState("");

  const dispatch = useDispatch();

  const handleSave = () => {
    const entry = {
      name:name,
      plannedAmount: Number(plannedAmount),
      actualAmount: Number(actualAmount),
    };
    dispatch(addBudgetEntry(entry));
    navigation.navigate("BudgetEntryListing");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name of the item:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Enter item name"
      />
      <Text style={styles.label}>Planned amount:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPlannedAmount}
        value={plannedAmount}
        keyboardType="numeric"
        placeholder="Enter planned amount"
      />
      <Text style={styles.label}>Actual amount:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setActualAmount}
        value={actualAmount}
        keyboardType="numeric"
        placeholder="Enter actual amount"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BudgetEntryListing")}
      >
        <Text style={styles.buttonText}>Show items</Text>
      </TouchableOpacity>
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
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BudgetEntry;
