import React, { Component } from "react";
import PropTypes from 'prop-types';

import ChildComponent from './childComponent';
import { withLightState } from '../hoc/withLightState.hoc';

export class _ParentComponent extends Component {

  static propTypes = {
    LightOn: PropTypes.bool,
    dispatchCalculateBill: PropTypes.func
  }

  render() {
    const { LightOn, dispatchCalculateBill } = this.props;
    return (<div>
      <ChildComponent
        LightOn={LightOn}
        dispatchCalculateBill={dispatchCalculateBill} />
    </div>);
  }
}


export const ParentComponent = withLightState(_ParentComponent);


