// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
//
// const users = [
//     { phonenumber: '12345678901', password: '123' },
//     { phonenumber: '22222222222', password: '222' },
//     { phonenumber: '23333333333', password: '85862' },
//     { phonenumber: '83467426785', password: '4as5' }
// ]
//
// class LoginButton extends Component {
//     constructor () {
//         super()
//         this.state = { isLogin: false }
//     }
//
//     handleClickOnLoginButton () {
//         this.setState({
//             isLogin: !this.state.isLogin
//         })
//     }
//
//     render () {
//         return (
//             <button onClick={this.handleClickOnLoginButton.bind(this)}>
//                 {this.state.isLogin ? '退出' : '登陆'}
//             </button>
//         )
//     }
// }
//
// class User extends Component {
//     render () {
//         const { user } = this.props
//         return (
//             <div>
//                 <div>姓名：{user.phonenumber}</div>
//                 <hr />
//             </div>
//         )
//     }
// }
//
// class Index extends Component {
//     render () {
//         return (
//             <div>
//                 <LoginButton/>
//                 {users.map((user, i) => <User key={i} user={user} />)}
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <Index />,
//     document.getElementById('root')
// )


// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// class Clock extends Component {
//     constructor () {
//         super()
//         this.state = {
//             date: new Date()
//         }
//     }
//
//     componentWillMount () {
//         this.timer = setInterval(() => {
//             this.setState({ date: new Date() })
//         }, 1000)
//     }
//     render () {
//         return (
//             <div>
//                 <h1>
//                     <p>现在的时间是</p>
//                     {this.state.date.toLocaleTimeString()}
//                 </h1>
//             </div>
//         )
//     }
// }
// class Header extends Component {
//     constructor () {
//         super()
//         console.log('construct')
//     }
//
//     componentWillMount () {
//         console.log('component will mount')
//     }
//
//     componentWillUnmount() {
//         console.log('component will unmount')
//     }
//
//     componentDidMount () {
//         console.log('component did mount')
//     }
//
//     render () {
//         console.log('render')
//         return (
//             <div>
//                 <h1 className='title'>React 小书</h1>
//             </div>
//         )
//     }
// }
// class Index extends Component {
//     constructor() {
//         super()
//         this.state = {
//             isShowHeader: true
//         }
//     }
//
//     handleShowOrHide () {
//         this.setState({
//             isShowHeader: !this.state.isShowHeader
//         })
//     }
//
//     render () {
//         return (
//             <div>
//                 {this.state.isShowHeader ? <Header /> : null}
//                 <button onClick={this.handleShowOrHide.bind(this)}>
//                     显示或者隐藏标题
//                 </button>
//                 <Clock/>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <Index />,
//     document.getElementById('root')
// )



import React from 'react'
import ReactDOM from 'react-dom'
import LoginApp from './LoginApp'
import './index.css'

ReactDOM.render(
    <LoginApp />,
    document.getElementById('root')
)