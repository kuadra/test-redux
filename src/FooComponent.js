import React from "react";
import { connect } from "react-redux";
import Foo2 from "./foo2";

function fooComponent(props) {
  for (let i = 0; i < 10; i++) {
    return <Foo2 />;
  }
}

function mapStateToProps(state) {
  return {
    foo: state.count
  };
}

export default connect(mapStateToProps)(fooComponent);
