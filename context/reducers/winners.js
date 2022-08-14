export function winners(state, action) {
    switch (action.type) {
      case "LOTTERY_WINNERS":
        return { ...state, winners: action.payload };
      default:
        return state;
    }
  }