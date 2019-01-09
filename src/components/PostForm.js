import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { createPost }  from '../actions/postActions'
class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  onSubmit(event) {
    event.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post)    
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="">Title: </label><br />
            <input type="title" name="title" onChange={this.onChange} value={this.state.title} />
          </div>
          <br />
          <div>
            <label htmlFor="">Body: </label><br />
            <textarea type="text" onChange={this.onChange} name="body" value={this.state.body} />
          </div>
          <br />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
PostForm.propTyes = {
  createPost: PropTypes.func.isRequired
}
export default connect(null, {createPost})(PostForm)