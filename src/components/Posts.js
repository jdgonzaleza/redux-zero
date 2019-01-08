import React, { Component } from 'react'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  async componentDidMount() {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts/')
    let jSon = await result.json()
    this.setState({posts: jSon})
    console.log(jSon)
  }


  render() {
    return (
      <div>
        <h1>Posts</h1>
        {
          this.state.posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        }
      </div>
    )
  }
}
export default Posts