export function players(state, action) {
    switch (action.type) {
      case "LOTTERY_PLAYERS":
        return { ...state, players: action.payload };
      default:
        return state;
    }
  }