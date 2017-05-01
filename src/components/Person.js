import React from 'react'
import { connect } from 'react-redux'
import { updateBio } from '../actions/personAction'
import axios from 'axios'

class Person extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      status: 0,
      name: props.name
    }
  }

  handleChangeStatus () {
    if (this.state.status === 0)
      this.setState({ status: 1})
    else
      this.setState({ status: 0})
  }

  onChangeName (event) {
    this.setState({ name: event.target.value})
    this.props.onChangeName(this.state.name)
  }
  
  componentWillMount() {
    console.log("component will mount")
    this.props.updateBio('test')
  }

  render() {
    var style = {
      color: "red",
      backgroundColor: "yellow"
    }

    var address = {}
    if (this.props.address) {
      address = this.props.address
    }

    return (
      <div style={style}>
        Ini {this.props.name} umur {this.props.age}
        
        {
          //ini comment
        }
        {address.address}
        {address.postalCode}
        <br />
        {this.state.status ? "available" : "unavailable"}
        <br />
        <button onClick={this.handleChangeStatus.bind(this)}>Change status</button>
        <br />
        <input type="text" value={this.state.name} onChange={this.onChangeName.bind(this)} />
        <br />
        <button onClick={() => { this.props.updateBio('hei') }}>Update bio</button>
        <hr />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    person: state.reducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBio: (data) => {
      axios.get("http://swapi.co/api/planets/3/").
      then((response) => {
        console.log(response)
        dispatch(updateBio(response.data.name))
      }).
      catch((error) => {})
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Person)