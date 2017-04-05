import React from "react";
import ReactDOM from "react-dom";

class KekComponent extends React.Component {
  render(){
    return (
      <div>Hellow Horde</div>
    );
  }
}

ReactDOM.render((<KekComponent />), document.getElementById('mount'));
