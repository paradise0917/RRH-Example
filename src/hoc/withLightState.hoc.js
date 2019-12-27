import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createAction } from "redux-actions";

import { ACTION_TYPES } from "../constants/actionTypes.constant";

const mapStateToProps = state => ({
  /** 格式可參考 reducer 的 initialState */
  LightOn: state.LightOn
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatchUpdateLightState: createAction(ACTION_TYPES.UPDATE_LIGHTON)
    },
    dispatch
  );

/* 利用 HOC 的方式，讓傳進來的 component 附加有 LightOn 相關的 Props (From Redux Store) */
export const withLightState = WrappedComponent => {

  class withLightState extends Component {
    
    static propTypes = {
      LightOn: PropTypes.bool
    };

    render() {

      const { LightOn, dispatchUpdateLightState } = this.props;

      return (<WrappedComponent
        LightOn={LightOn}
        dispatchUpdateLightState={dispatchUpdateLightState}
      />);

    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withLightState);
};

