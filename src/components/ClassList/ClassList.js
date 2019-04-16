import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state={
      classList: []
    }
    
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      this.setState({
        classList: res.data
      })
    }).catch(err => {
      console.log(`Error: ${err}`)
    })
  }

  render() {

    let students = this.state.classList.map(student => {
      return <Link key={student.first_name} to={`/students/${student.id}`}>
        <h3>{`${student.first_name} ${student.last_name}`}</h3>
      </Link>
    })
    return (
      <div className="box">
        <h1>{`${this.props.match.params.class}`}</h1>
        <h2>ClassList:</h2>
        {students}

        <Link to={`/`}><button>Home</button></Link>
      </div>
    )
  }
}