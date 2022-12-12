import React, { Component } from 'react'
import PropTypes from "prop-types"
class Validation extends Component {
  render() {
    return (
      <div>Validation</div>
    )
  }
}
PropsValidation.propType={
    name:PropTypes.string,
    id:PropTypes.number.isRequired,
}
PropsValidation.defaultpropType={
    name:'Abcd'
};

export default Validation