var React = require('react');
var Hero = require('./hero');
var Menu = require('./menu');

var Hansel = React.createClass({
	getInitialState: function() {
    return {
      showMenu: false
    };
  },
  onShowHide: function() {
  	var width = window.innerWidth;
  	console.log(width);
  	if(width > 768) {
	    this.setState({
	      showMenu: !this.state.showMenu
	    });
    }
  },
  render: function() {
    return (
      <div className="app-container">
        <div className="hero-container" style={{height: this.state.showMenu ? "95vh" : "100vh"}}>
          <Hero />
          <div className="menu-link" onClick={this.onShowHide}>
            <span>M</span>
            <span>O</span>
            <span>R</span>
            <span>E</span>
            <span>M</span>
            <span>E</span>
            <span>O</span>
            <span>W</span>
          </div>
        </div>
        <Menu show={this.state.showMenu}/>
      </div>
    );
  }
});

module.exports = Hansel;