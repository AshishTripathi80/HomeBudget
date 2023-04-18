import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BudgetEntry from "./src/screens/BudgetEntry";
import BudgetEntryListing from "./src/screens/BudgetEntryListing";
import budgetEntryReducer from "./src/reducers/budgetEntryReducer";

const Stack = createStackNavigator();
const store = createStore(budgetEntryReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BudgetEntry"
            component={BudgetEntry}
            options={{ title: "Budget entry" }}
          />
          <Stack.Screen
            name="BudgetEntryListing"
            component={BudgetEntryListing}
            options={{ title: "Budget entry listing" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
