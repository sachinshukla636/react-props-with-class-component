import React from 'react';

class Student extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ backgroundColor: 'blue', margin: 20 }}>
        <h1>Hello {this.props.name}</h1>
        <h2>Email :{this.props.email}</h2>
      </div>
    );
  }
}
//Props with Class Component
export default Student;
