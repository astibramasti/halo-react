import React from 'react'
import { Link } from 'react-router-dom'

const style = {
      color: 'white'
    }

const Header = (props) => {
    return (
      <div>
        <h2>This is my header</h2>
        <h3> <Link to="/" style={style}>HOME</Link> | <Link to="/people" style={style}>PEOPLE</Link> </h3>
      </div>
    )
  
}

export default Header