
const appInitialState = { count : 0 }

export default (state = appInitialState, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, count: state.count + 1 };
    case 'DEC':
      return { ...state, count: state.count - 1 };
    case 'PLUS2':
      return { ...state, count: state.count + 2 };
    case 'PLUS3':
      return { ...state, count: state.count + 3 };
    default:
      return state;
  }
};
