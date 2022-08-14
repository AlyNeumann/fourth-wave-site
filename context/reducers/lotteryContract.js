export function lotteryContract(state, action) {
    switch (action.type) {
      case "LOTTERY_CONTRACT":
        return { ...state, lotteryContract: action.payload };
      default:
        return state;
    }
  }