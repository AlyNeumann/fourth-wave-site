export function web3(state, action) {
    switch (action.type) {
      case "WEB3_INSTANCE":
        return { ...state, web3: action.payload };
      default:
        return state;
    }
  }