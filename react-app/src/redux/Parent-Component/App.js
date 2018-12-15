import React, { Component } from "react";
import logo from "./css-images/logo.svg";
import "./css-images/App.css";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../Actions/actions";
import { FullSite } from "../Child-Components/index";

class App extends Component {
  componentDidMount(props) {}

  render() {
    return (
      <div className="App">
        <FullSite />
      </div>
    );
    // end Return
  } // end Render
} // end App

const mapStateToProps = state => {
  return {
    me: state.appReducer.me
  };
};
export default connect(mapStateToProps)(App);
