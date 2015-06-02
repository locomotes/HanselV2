var React = require('react');

var Menu = React.createClass({
	render: function () {
		return (
			<div className="menu-container"
        style={{display: this.props.show ? "block" : "none"}}
        style={{height: this.props.show ? "5vh" : "0vh"}}
      >
        <span>This is good enough for meow.....</span><span>stay tuned!</span> 
      </div>
		);
	}
});

module.exports = Menu;