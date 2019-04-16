import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state={
      student: {}
    }

  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res => {
      this.setState({
        student: res.data
      })
    }).catch(err => {
      console.log(`Error: ${err}`)
    })
  }

  render() {
    return (
      <div className="box">
        <h1>{`${this.state.student.first_name} ${this.state.student.last_name}`}</h1>
        <h3>{`Grade: ${this.state.student.grade}`}</h3>
        <h3>{`Email: ${this.state.student.email}`}</h3>
        <Link to={`/classlist/${this.state.student.class}`}><button>Back to Class</button></Link>
      </div>
    )
  }
}