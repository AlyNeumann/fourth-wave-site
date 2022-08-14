export function user(state, action) {
  switch (action.type) {
    case "CONNECTED_WALLET":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
