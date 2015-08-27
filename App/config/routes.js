var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var Home = require('../Components/Home');
var Main = require('../Components/Main');

var ProjectPage = require('../Components/ProjectPage');

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={ProjectPage} />
  </Route>
);