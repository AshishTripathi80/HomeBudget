const initialState = [];

const budgetEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BUDGET_ENTRY":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default budgetEntryReducer;
