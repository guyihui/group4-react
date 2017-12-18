import React, { Component } from 'react';

import './Contact.css';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/

class Contact extends Component {
  ConfirmTake () {
    alert("请联系手机号为18912345678同学获取提货码，谢谢")
  }

  render () {
    return (
      <div className='OrderTake'>
        <header className='Take-header'>
          <h1 className='Take-title'>Thanks for taking express</h1>
        </header>
        {/*pretend to have user, need to be fetched from main page*/}
        <body>
        <div className='chosenOrder'>
          <p className='detail'>
            快递详情： <br/>
          </p>
          <p className='OrderDetail'>
            姓名：小明 手机尾号：5678 快递点：爱心街区134号
          </p>
        </div>
          <button
            className='TakeButton'
            onClick={this.ConfirmTake.bind(this)}>
            确认
          </button>
        </body>
      </div>
    )
  }
}

export default Contact;
