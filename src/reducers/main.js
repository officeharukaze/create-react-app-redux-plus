const appInitialState = { url: '' };

export default (state = appInitialState, action) => {
  switch (action.type) {
    case 'FILE_UPLOAD': {
      const url = action.url;
      return { ...state, url };
    }
    default:
      return state;
  }
};
