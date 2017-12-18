import React, { Component } from 'react'
import Express from './Express'

class ExpressList extends Component {
    static defaultProps = {
        expresses: []
    }
    render() {
        return (
            <div>
            {this.props.expresses.map((express, i) =>
            <Express express={express} key={i} />
    )}
    </div>
    )
    }
}

export default ExpressList


