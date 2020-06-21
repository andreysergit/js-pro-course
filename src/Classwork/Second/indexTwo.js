import {FirstComponent} from './First'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return ({
        counterTwo: state.counterTwo,
    });
};

const mapDispatchToProps = (dispatch) => ({
  incrementtwo: () => {
  dispatch({ type: 'INCREMENTtwo' });
},
decrementtwo: () => {
  dispatch({ type: 'DECREMENTtwo' });
},
plustwo: (input) => {
  dispatch({ type: 'PLUStwo', input });
},
minustwo: (input) => {
  dispatch({ type: 'MINUStwo', input });
},
});


export const First = connect(mapStateToProps, mapDispatchToProps)(FirstComponent);