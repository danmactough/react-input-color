require('../lib/input-color.less');
require('./app.less');

var React = require('react');
var InputColor = require('../lib/input-color.js');

var App = React.createClass({
  getInitialState: function() {
    return {
      color: '#3599db'
    };
  },

  render: function() {
    return (
      <div>
        <div className="target" style={{width:100,height:100,background:this.state.color}}></div>
        <span>{'color value: ' + this.state.color}</span>
        <br/><br/>
        <input
          type="color"
          value={this.state.color}
          defaultValue="#345678"
          onChange={this._onColorChange}/>
        <br/><br/>
        <InputColor
          value={this.state.color}
          defaultValue="#345678"
          onChange={this._onChange}/>
      </div>
    );
  },

  _onChange: function(color) {
    this.setState({
      color: color
    });
  },

  _onColorChange: function(e) {
    this.setState({
      color: e.target.value
    });
  }
});

React.render(<App/>, document.body);
