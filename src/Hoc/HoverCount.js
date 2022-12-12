import React, { Component } from 'react'
import EnComponent from './Hoc'

class HoverCount extends Component {
  render() {
    const {name,count,inc}=this.props
    return (
      <div>
      {name}
      <h1 onMouseEnter={inc}>HoverOn{count}</h1>
      </div>
    )
  }
}
export default EnComponent(HoverCount);