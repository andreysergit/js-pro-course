import { connect } from 'react-redux';
import { addTodo, getTodos, setDone, setTab } from '../Store/todosActionCreators';
import { getTabTodos } from '../Store/todosSelectors';
import { TodoComponent } from './Todo';

const mapStateToProps = (state) => ({
  todos: getTabTodos(state),
  tab: state.tab,
});

const actionCreators = {
  addTodo,
  getTodos,
  setDone,
  setTab,
};

export const Todo = connect(mapStateToProps, actionCreators)(TodoComponent);