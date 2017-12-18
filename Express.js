import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Express extends Component {
  static contextTypes = {
      router: PropTypes.object
  }//for jmp

  static propTypes = {
    express: PropTypes.object.isRequired,
    onDeleteExpress: PropTypes.func,
    index: PropTypes.number,

  }

  constructor () {
    super()
    this.state = { timeString: '' }
  }

  componentWillMount () {
    this._updateTimeString()
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }

  _updateTimeString () {
    const express = this.props.express
    const duration = (+Date.now() - express.createdTime) / 1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  handleDeleteExpress () {
    if (this.props.onDeleteExpress) {
      //this.props.onDeleteExpress(this.props.index)
      this.context.router.history.push('/contact');
      //for jmp
    }
  }

  componentWillUnmount () {
    clearInterval(this._timer)
  }

  render () {
    const { express } = this.props
    return (
      <div className='express'>
        <div className='express-user'>
          <span className='express-username'>
            {express.username}
          </span>：
        </div>
        <p>{express.content}</p>
        <span className='express-createdtime'>
          {this.state.timeString}
        </span>
        <span
          onClick={this.handleDeleteExpress.bind(this)}
          className='express-delete'>
          <Link to="/contact">接单</Link>
        </span>
      </div>
    )
  }
}

export default Express
