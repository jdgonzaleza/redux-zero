import React, { Component } from 'react'

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
    this.setState({[event.target.name]: event.target.value})
  }
  onSubmit(event) {
    
  }
  
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSumbit}>
          <div>
            <label htmlFor="">Title: </label><br/>
            <input type="title" name="title" onChange= {this.onChange}value={this.state.title}/>
          </div>
          <br/>
          <div>
            <label htmlFor="">Body: </label><br/>
            <textarea type="text" onChange= {this.onChange} name="body" value={this.state.body}/>
          </div>
          <br/>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
export default PostForm