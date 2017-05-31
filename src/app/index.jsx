//import React from 'react';
//import ReactDOM from 'react-dom';
var React = require('react');
var ReactDOM = require('react-dom');
var GuineaPig = require('./GuineaPig.jsx');

var GUINEAPATHS = [
    'http://circuslabs.net/~ryan.rodd/c/GP1.jpg',
    'http://circuslabs.net/~ryan.rodd/c/GP2.jpg',
    'http://circuslabs.net/~ryan.rodd/c/GP3.jpg',
    'http://circuslabs.net/~ryan.rodd/c/GP4.jpg',
];

var GuineaPigsContainer = React.createClass({
    nextGP: function() {
        var current = this.state.currentGP;
        var newGP   = ++current % GUINEAPATHS.length;
        this.setState({
            currentGP:newGP
        });
    },
    getInitialState:function(){
        return { currentGP:0 }
    },
    componentDidMount: function() {
        this.interval = setInterval(this.nextGP, 3000);
    },
    render:function(){
        var src = GUINEAPATHS[this.state.currentGP];
        return <GuineaPig src={src} />;
    }
});

ReactDOM.render(<GuineaPigsContainer/>, document.getElementById('app'));
