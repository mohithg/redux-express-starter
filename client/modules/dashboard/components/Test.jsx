import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {

  getValue() {
    return 12;
  }

  render() {
    let x = this.getValue();
    return (<h1>Hello World {x}</h1>);
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('example')
);
