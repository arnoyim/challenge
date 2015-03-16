/** @jsx React.DOM */

var App = React.createClass({
  render : function() {
    return (
     React.createElement("h1", null, 'Hello World!')
    )
  }
});

React.render(<App />, document.querySelector('#app'));
