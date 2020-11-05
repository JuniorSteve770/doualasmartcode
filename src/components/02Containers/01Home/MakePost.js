import React from 'react';
import axios from 'axios';

export default class MakePost extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  //this function takes event from input and add to the state
  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    
    axios.post(`http://newsapi.org/v2/everything?domains=wsj.com&apiKey=4e28b5843505461bbf0a789e70a516f3`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}