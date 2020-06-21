import { TodoComponent } from "./Todo";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    item: state,
  };
};

const Connect = () =>{
  useEffect(()=>{
    const getData = async ()=>{
      const responce = await fetch ('http://localhost:3004/todos')
      const data = await responce.json();
      addTodo(data)
    }
  })
}

const mapDispatchToProps = (dispatch) => ({
  add: (input) => {
    dispatch({ type: "ADD", input });
  },
  delet: (id) => {
    dispatch({ type: "DELETE", state: { id } });
  },
  done: (id) =>{
    dispatch({type: 'DONE', id});
  }
});

export const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
