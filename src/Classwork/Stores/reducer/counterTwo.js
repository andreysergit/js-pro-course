const initialState = 0;

export const counterTwo = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENTtwo':
      return state + 2;
    case 'DECREMENTtwo':
        return state - 2;
        case 'PLUStwo':
          return state + +action.input ;
          case 'MINUStwo':
            return state - +action.input ;
    default:
      return state;
  }
};