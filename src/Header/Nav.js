import React, { Component } from 'react'

const menu = [
  {
    item: 'Description',
    link: '#one'
  },
  {
    item: 'Pricing',
    link: '#two'
  },
  {
    item: 'Contact',
    link: '#three'
  }
]

const Menu = props => {
  return (
    <div>
      {props.list.map((menu, i) => (
        <a key={i} href={`#${menu.item}`} className="nav-link">
          <li id={menu.item} onClick={props.handleClick}>
            <p id={menu.item} onClick={props.handleClick}>
              {menu.item}
            </p>
          </li>
        </a>
      ))}
    </div>
  )
}

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItem: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    let menuItem = e.target.id
    this.setState({ menuItem })
  }

  componentDidUpdate() {
    if (typeof window !== undefined) {
      console.log(`You clicked ${this.state.menuItem.toLowerCase()}`)
      window.location.hash = this.state.menuItem.toLowerCase()
    }
  }

  render() {
    return (
      <nav id="nav-bar">
        <ul>
          <Menu list={menu} handleClick={this.handleClick} />
        </ul>
      </nav>
    )
  }
}
