import { SecondComponent } from './Second';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log(state.counter)
  return ({
    counter: state.counter,
  });
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch({ type: 'INCREMENT' });
  },
  decrement: () => {
    dispatch({ type: 'DECREMENT' });
  },
  plus: (input) => {
    dispatch({ type: 'PLUS', input });
  },
  minus: (input) => {
    dispatch({ type: 'MINUS', input });
  },
});

export const Second = connect(mapStateToProps, mapDispatchToProps)(SecondComponent);

