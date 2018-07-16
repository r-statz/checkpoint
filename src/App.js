import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MessageList from './MessageList'
import Toolbar from './Toolbar'


let seeds = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "selected": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": false,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "selected": false,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": false,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "selected": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "selected": false,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "selected": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "selected": false,
    "labels": []
  }
]



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {seeds : [...seeds]}
  }

 set = () => this.setState({seeds: this.state.seeds})


 read = (e) => {
   console.log(e.target.id)
   let bool = e.target.id === "read" ? true : false
   let messages = this.state.seeds.filter(x=>x.selected)
   let id = messages.map(x=>x.id)
   // this.api(id, 'read', bool)
 }

isSelected = (id, command) => {
  const selected = this.state.seeds.filter(x => x.id === id)[0]
  selected[command] ? selected[command]=false : selected[command]=true
  this.set()
}

selectAll = () => {
  this.state.seeds.every(x=>x.selected) ? this.state.seeds.map(x=>x.selected = false) :
  this.state.seeds.map(x=>x.selected = true)
  this.set()
}

toggle = () => {
  let messages = this.state.seeds.filter(x=>x.selected)
  return messages.length > 0 ? true : false
}

everySomeNone = () => {
  if(this.state.seeds.every(x=>x.selected)) {
    return "fa fa-check-square-o"
  } else if(this.state.seeds.some(x=>x.selected)) {
    return "fa fa-minus-square-o"
  }
  return "fa fa-square-o"
  }

remove = () => {
  let messages = this.state.seeds.filter(x => !x.selected)
  this.setState({seeds: messages})
  }

  render() {
    return (
      <div className="container">
        <Toolbar
          remove={this.remove}
          read={ this.read }
          selectAll = { this.selectAll }
          everySomeNone={this.everySomeNone}
          isSelected={this.isSelected}
          toggle = {this.toggle}
        />
        <MessageList
          list = { this.state.seeds }
          isSelected={this.isSelected}
        />

      </div>
    )
  }
}

export default App
