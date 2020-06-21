const itemList = [
  { id: 0, task: "Купить молоко", done: true, active: true },
  { id: 1, task: "Купить хлеб", done: false, active: false },
  { id: 2, task: "Купить масло", done: false, active: false },
];

export const item = (state = itemList, action) => {
  if (action.type === "ADD") {
    return [
      ...state,
      {
        id: state[state.length - 1].id + 1,
        task: action.input,
        done: false,
        active: false,
      },
    ];
  }
  if (action.type === "DELETE") {
    return state.filter((el) => el.id !== action.state.id);
  }
  if (action.type === "DONE") {
    return state.map((el) =>
      el.id === action.id ? { ...el, done: !el.done } : el
    );
  }
  return state;
};
