import React from 'react';
import Context from '../Context';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'red'
    };

    this.themeUpdater = this.themeUpdater.bind(this);
  }

  themeUpdater(newState) {
    this.setState({ ...this.state, newState });
  }

  render() {
    return (
      <Context.Provider
        value={{ theme: this.state, themeUpdater: this.themeUpdater }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
