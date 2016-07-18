import React from 'react';
import Provider from './provider.jsx';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Provider>
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

export default Container;
