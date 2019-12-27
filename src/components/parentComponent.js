import React, { Component } from "react";
import PropTypes from 'prop-types';

import ChildComponent from './childComponent';
import { withLightState } from '../hoc/withLightState.hoc';

export class _ParentComponent extends Component {

  static propTypes = {
    LightOn: PropTypes.bool,
    dispatchUpdateLightState: PropTypes.func
  }

  render() {
    const { LightOn, dispatchUpdateLightState } = this.props;
    return (<div>
      <ChildComponent
        LightOn={LightOn}
        dispatchUpdateLightState={dispatchUpdateLightState} />
    </div>);
  }
}


export const ParentComponent = withLightState(_ParentComponent);


