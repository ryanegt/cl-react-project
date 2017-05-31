import React from 'react';

var GuineaPig = React.createClass({
    propTypes: {
        src: React.PropTypes.string.isRequired // different PropTypes: string, object, bool, number, func, array
    },
    render:function(){
        var src = this.props.src;
        return (
            <div>
                <h1>My Guinea pigs</h1>
                <img src={src} />
            </div>
        )
    }
});

module.exports = GuineaPig;
