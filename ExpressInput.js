import React, { Component } from 'react'

class ExpressInput extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            content: '',
            phone:''
        }
    }

    handleUsernameChange (event) {
        this.setState({
            username: event.target.value
        })
    }


    handlePhoneChange (event) {
        this.setState({
            phone: event.target.value
        })
    }

    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }



    handleSubmit () {
        if (this.props.onSubmit) {
            const { username,phone, content } = this.state
            this.props.onSubmit({username, phone,content })
        }
        this.setState({ content: '' })
    }


    render () {
        return (
            <div className='express-input'>
                <div className='express-field'>
                    <span className='express-field-name'>用户名：</span>
                    <div className='express-field-input'>
                        <input
                        value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>

            <div className='express-field'>
                <span className='express-field-name'>手机号：</span>
            <div className='express-field-input'>
                <input
                value={this.state.phone}
                onChange={this.handlePhoneChange.bind(this)} />
            </div>
            </div>

                <div className='express-field'>
                    <span className='express-field-name'>快递信息：</span>
                    <div className='express-field-input'>
                        <textarea
                        value={this.state.content}
                        onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>

                <div className='express-field-button'>
                    <button
                    onClick={this.handleSubmit.bind(this)}>
                    发布
                    </button>
                </div>
            </div>
    )
    }
}

export default ExpressInput
