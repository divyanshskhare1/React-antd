import React from 'react';

class Collapsible extends React.Component {
    state = {
      collapsed: false,
    };
  
    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
    
    render() {
      return (
        
          <
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          />

      );
    }
  }

  export default Collapsible;