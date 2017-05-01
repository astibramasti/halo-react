import React from 'react'
import Person from './Person'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      person : {
        name : "Asti",
        age : 12
      }
    }
  }

  onChangeName (data) {
    var newPerson = { ...this.state.person, name: data}
    this.setState({ person: newPerson})
  }

  render () {
    var address = {
      address: "jogja",
      postalCode: 123444
    }

    return (
      <p>
        Home {this.state.person.name}
        <Person name={this.state.person.name} age={this.state.person.age} address={address} onChangeName={this.onChangeName.bind(this)} />
      </p>
    )
  }
}

export default Home