var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <br />
        <RouteHandler />
      </div>
    )
  }
}

module.exports = Main;