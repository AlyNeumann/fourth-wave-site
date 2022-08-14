export function pot(state, action) {
    switch (action.type) {
      case "LOTTERY_POT":
        return { ...state, pot: action.payload };
      default:
        return state;
    }
  }