import React, { Component } from 'react'
import LoginInput from './LoginInput'

class LoginApp extends Component {
    constructor () {
        super()
        this.state = {
            phonenumber: '',
            address: ''
        }
    }

    componentWillMount () {
        let login = localStorage.getItem('login')
        if (login) {
            login = JSON.parse(login)
            this.setState({ login })
        }
    }

    handleSubmitLogin (login) {
        console.log(login)
        if (!login) return
        if (!login.phonenumber) return alert('请输入手机号')
        if (!login.address) return alert('请输入地址')
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
