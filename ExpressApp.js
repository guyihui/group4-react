import React, { Component } from 'react'
import ExpressInput from './ExpressInput'
import ExpressList from './ExpressList'

class ExpressApp extends Component {
    constructor () {
        super()
        this.state = {
            expresses: []
        }
    }

    handleSubmitExpress (express) {
        if (!express) return
        if (!express.username) return alert('请输入用户名')
        if (!express.content) return alert('请输入快递信息')
        this.state.expresses.push(express)
        this.setState({
            expresses: this.state.expresses
        })
    }

    render() {
        return (
            <div className='wrapper'>
            <ExpressInput onSubmit={this.handleSubmitExpress.bind(this)} />
        <ExpressList expresses={this.state.expresses}/>
        </div>
    )
    }
}

export default ExpressApp
