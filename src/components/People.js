import React from 'react'
import Person from './Person'

class People extends React.Component {
  
  render () {
    console.log(this.props.match.params)
    return (
      <p>
        Ini teman-temanku {this.props.match.params.name}
        <Person name={"Clara"} age={12} />
        <Person name={"Willy"} age={13} />
        <Person name={"Dian"} age={14} />
      </p>
    )
  }
}

export default People