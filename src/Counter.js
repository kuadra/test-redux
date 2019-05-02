import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  console.log("counter", props);
  return (
    <div>
      <h1>Counter</h1>
      <p> count: {props.count}</p>
      <button onClick={props.incrementClick}>increment</button>
      <button onClick={props.decrementClick}>decrement</button>
    </div>
  );
}

//state viene fornito da redux
function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    count: state.count
  };
}

//dispatch viene passata da redux
function mapDispatchToProps(dispatch) {
  return {
    incrementClick: () => {
      console.log("increment");
      const action = { type: "INCREMENT", value: 1 };
      dispatch(action);
    },
    decrementClick: () => {
      console.log("decrement");
      const action = { type: "DECREMENT", value: 2 };
      dispatch(action);
    }
  };
}

//questo viene gestito da redux. Si occupa lui di mappare la SUA funzione dispatch
//con i prop del componente e lo stato dello store con quello del componente.
//connect è la funzione di redux che fa da collante tra i componenti react e lo store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
