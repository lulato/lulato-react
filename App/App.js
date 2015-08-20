var React = require('react');
var Router = require('react-router')
var routes = require('./config/routes');


// This is the Files that will get everything started

Router.run(routes, (Root) => {
  React.render(<Root />, document.getElementById('app'));
});