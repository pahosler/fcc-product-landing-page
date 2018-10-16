import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      buttonTxt: 'Send'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    if (e.target.name === 'name') {
      this.setState({ name: e.target.value })
    } else if (e.target.name === 'email') {
      this.setState({ email: e.target.value })
    } else {
      this.setState({ message: e.target.value })
    }
  }

  handleSubmit() {
    let mailForm = {
      email: this.state.email,
      message: this.state.message,
      name: this.state.name
    }
    this.setState({ buttonTxt: 'Sending...' })
    // send(mailForm)  https://www.freecodecamp.com/email-submit
    this.setState({ buttonTxt: 'Sent' })
  }

  render() {
    return (
      <div className="mail-form">
        <form action="https://www.freecodecamp.com/email-submit" id="form">
          <div>
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Your Name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              placeholder="Your E-Mail"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Message</label>
            <input
              type="textarea"
              rows="10"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label />
            <input
              id="submit"
              type="submit"
              value={this.state.buttonTxt}
              onClick={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    )
  }
}
