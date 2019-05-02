import React from "react";
import { connect } from "react-redux";

function foo2(props) {
  return <div class="foo2">{props.foo}</div>;
}

function mapStateToProps(state) {
  return {
    foo: state.count
  };
}

export default connect(mapStateToProps)(foo2);
