var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Hero = require('./Hero');



class Main extends React.Component {
  render() {
    return (
        <div style={{"height" : "100%"}}>
          
          <RouteHandler />
        </div>
    )
  }
}

module.exports = Main;