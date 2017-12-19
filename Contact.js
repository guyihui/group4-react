import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Contact.css';

class Contact extends Component {

  static contextTypes = {
      router: PropTypes.object
  }

  ConfirmTake () {
    alert('请联系手机号为' + this.props.location.query.phone +
        '的'+ this.props.location.query.username + '同学获取提货码，谢谢')
  }

  back (){
    this.context.router.history.go(-1);
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
          <p className='OrderDetail'>
            姓名：{this.props.location.query.username} <br/>
            快递详情：{this.props.location.query.content}
          </p>
        </div>
          <button
            className='TakeButton'
            onClick={this.ConfirmTake.bind(this)}>
            确认
          </button>
          <button
            className='back'
            onClick={this.back.bind(this)}>
            返回
          </button>
        </body>
      </div>
    )
  }
}

export default Contact;
