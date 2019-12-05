import React from 'react';
import withCache from './withCache';

class LocalCache extends React.Component {
    constructor(props) {
      super(props);

      // can add state here if we don't want to put a value in apollo for some reason
      this.state = { 
        locale: navigator.language
      };
    }
  
    render() {
      return (
        <div>
          {this.props.render({...this.state, ...this.props})}
        </div>
      );
    }
  }

module.exports = withCache(LocalCache);