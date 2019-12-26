import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ChildComponent extends Component {

  static propTypes = {
    LightOn: PropTypes.bool,
    dispatchCalculateBill: PropTypes.func
  }
  
  render(){

    const { LightOn, dispatchCalculateBill } = this.props;
    
    return(<div onClick={dispatchCalculateBill}>
      {`Click to turn the light: ${LightOn}`}
    </div>);
  }
}