import React, { Component } from 'react'

class LoginInput extends Component {
    constructor () {
        super()
        this.state = {
            phonenumber: '',
            password: ''
        }
    }

    handlePhonenumberChange (event) {
        this.setState({
            phonenumber: event.target.value
        })
    }

    handlePasswordChange (event) {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit () {
        if (this.props.onSubmit) {
            const { phonenumber, password } = this.state
            this.props.onSubmit({phonenumber, password})
        }
        this.setState({ phonenumber:'', password: '' })
    }

    render() {
        return (
            <div className='login-input'>
                <div className='login-field'>
                    <span className='login-field-name'>手机号：</span>
                    <div className='login-field-input'>
                        <input
                            value={this.state.phonenumber}
                            onChange={this.handlePhonenumberChange.bind(this)} />
                    </div>
                </div>
                <div className='login-field'>
                    <span className='login-field-name'>密码：</span>
                    <div className='login-field-input'>
                        <input
                            value={this.state.password}
                            onChange={this.handlePasswordChange.bind(this)} />
                    </div>
                </div>
                <div className='login-field-button'>
                    <button
                        onClick={this.handleSubmit.bind(this)}>
                        登陆
                    </button>
                </div>
                <div>{ this.state.phonenumber }</div>
                <div>{ this.state.password }</div>
            </div>
        )
    }
}

export default LoginInput