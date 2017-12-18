import React, { Component } from 'react'

class Express extends Component {
    render () {
        return (
            <div className='express'>
            <div className='express-user'>
            <span>{this.props.express.username} </span>：
        </div>
        <p>{this.props.express.content}</p>
        </div>
    )
    }
}

export default Express

