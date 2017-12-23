import React, { Component } from 'react'
import LoginInput from './LoginInput'

class LoginApp extends Component {
    handleSubmitLogin (login) {
        console.log(login)
    }

    render() {
        return (
            <div className='wrapper'>
                <LoginInput
                    onSubmit={this.handleSubmitLogin.bind(this)}/>
            </div>
        )
    }
}

export default LoginApp
