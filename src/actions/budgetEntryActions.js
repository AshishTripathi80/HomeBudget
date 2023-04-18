export const addBudgetEntry = (entry) => {
  return {
    type: "ADD_BUDGET_ENTRY",
    payload: entry,
  };
};
