import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ChildComponent extends Component {

  static propTypes = {
    LightOn: PropTypes.bool,
    dispatchUpdateLightState: PropTypes.func
  }
  
  render(){

    const { LightOn, dispatchUpdateLightState } = this.props;
    
    return(<div onClick={dispatchUpdateLightState}>
      {`Click to turn the light: ${LightOn}`}
    </div>);
  }
}