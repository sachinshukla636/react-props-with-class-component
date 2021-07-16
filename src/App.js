import React from 'react';
import './style.css';
import Student from './Student';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Sachin'
    };
  }
  render() {
    return (
      <div>
        <h1>Props</h1>
        <Student name={this.state.name} email="sachinshukla636@gmail.com" />
        <button
          onClick={() => {
            this.setState({ name: 'Shukla' });
          }}
        >
          Update Data
        </button>
      </div>
    );
  }
}
export default App;
