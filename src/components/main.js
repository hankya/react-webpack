var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var React = require('react');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Plan = require('./Plan');
var Workflow = require('./Workflow');
var Watch = require('./Watch');
var Config = require('./Config');
var App = React.createClass({
  render: function () {
    return (
    <div className="container">
      <div className="section">
        <div className="row">
        生产指挥中心
        </div>
        <div className="row">
         <Link to="app" className="waves-effect waves-light btn">今日计划</Link>
        <Link to="workflow" className="waves-effect waves-light btn">今日工作流</Link>
        <Link to="watch" className="waves-effect waves-light btn">实时数据</Link>
        <Link to="config" className="waves-effect waves-light btn">系统配置</Link>
    </div>

        {/* this is the important part */}
      </div>
     <RouteHandler/>
    </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="workflow" handler={Workflow}/>
    <Route name="watch" handler={Watch}/>
    <Route name="config" handler={Config}/>
    <DefaultRoute handler={Plan}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
