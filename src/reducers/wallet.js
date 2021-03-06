// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case 'USER_WALLET':
    return { ...state, expenses: [...state.expenses, action.value] };
  case 'TOTAL_EXPENSE':
    return { ...state, state: { totalExpenses: action.value } };
  default:
    return state;
  }
};

export default wallet;
