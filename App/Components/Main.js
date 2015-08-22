var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Hero = require('./Hero');

class Main extends React.Component {
  render() {
    return (
        <RouteHandler />
    )
  }
}

module.exports = Main;