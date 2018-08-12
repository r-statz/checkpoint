import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MessageList from './MessageList'
import Toolbar from './Toolbar'
import Compose from './Compose'


class App extends Component {

  state = {messages: []}

  set = () => this.setState({messages: this.state.messages})

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/messages')
    const json = await response.json()
    this.setState({messages: json})
  }

  async createMessage(newMessage) {
    const response = await fetch('http://localhost:8082/api/messages',
    {
      method: 'POST',
      body: JSON.stringify(newMessage),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const message = await response.json()

    this.setState({messages: [...this.state.messages, message]})
    this.showCompose()
  }

  async update(arr, cmd, prop, value) {
    let items = {
      id: arr,
      cmd: cmd,
      [prop]: value,
    }

    const response = await fetch('http://localhost:8082/api/messages',
    {
      method: 'PATCH',
      body: JSON.stringify(items),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const message = await response.json()
    this.setState({messages: message})
  }


getInput = (e) => {
  let newMessage = {
    ...this.state.message,
    [e.target.id]: e.target.value
  }
  this.setState({message: {...newMessage}})
}

setInput = (e) => {
  e.preventDefault()
  let newMessage = this.state.message
  this.createMessage(newMessage)
}

// count = () => {
//   const unreadCount = this.state.messages.filter(x=>!x.read)
//   let badgeCount = unreadCount.length
//   return badgeCount
// }

read = (e) => {
  let bool = e.target.id === "read" ? true : false
  let messages = this.state.messages.filter(x=>x.selected)
  messages.map(x=>x.read = bool)
  // this.set({messages: messages})
 }

isSelected = (id, command) => {
  console.log(command)
  let value
  const selected = this.state.messages.filter(x => x.id === id)[0]

  selected[command] ? selected[command]=false : selected[command]=true
  // selected[command] ? value=false : value=true
  // this.update(id, "starred", "starred", value)
this.set()
}

selectAll = () => {
  this.state.messages.every(x=>x.selected) ? this.state.messages.map(x=>x.selected = false) :
  this.state.messages.map(x=>x.selected = true)
  this.set()
}

toggle = () => {
  let messages = this.state.messages.filter(x=>x.selected)
  return messages.length > 0 ? true : false
}

everySomeNone = () => {
  if(this.state.messages.every(x=>x.selected)) {
    return "fa fa-check-square-o"
  } else if(this.state.messages.some(x=>x.selected)) {
    return "fa fa-minus-square-o"
  }
  return "fa fa-square-o"
  }

remove = () => {
  let messages = this.state.messages.filter(x => !x.selected).map(x=> x.id)
  // this.setState({messages: messages})
  }

addLabel = (e) => {
  let addLabels = this.state.messages.filter(x=>x.selected)
  addLabels.map(x=> {
    if(x.labels.includes(e.target.value)){
      return
    } else {
    x.labels.push(e.target.value)
    }
  })
  this.set()
}

dropLabel = (e) => {
  let dropLabels = this.state.messages.filter(x=>x.selected)
  dropLabels.map(x => {
    if(x.labels.includes(e.target.value)) {
      x.labels.splice(x.labels.indexOf(e.target.value), 1)
    }
  })
  this.set()
}

showCompose = () => {
  let composeState = this.state.compose ? this.state.compose = false : this.state.compose = true
  this.setState({compose: composeState})
}

render() {

  return (
    <div className="container">
      <Toolbar
        showCompose={this.showCompose}
        addLabel={this.addLabel}
        dropLabel={this.dropLabel}
        remove={this.remove}
        read={ this.read }
        selectAll = { this.selectAll }
        everySomeNone={this.everySomeNone}
        isSelected={this.isSelected}
        toggle = {this.toggle}
        count = {this.count}
      />
      {this.state.compose ? <Compose getInput= { this.getInput } setInput={ this.setInput } showCompose={this.showCompose}
      /> : <div></div>}
      <MessageList
        list = { this.state.messages }
        isSelected={this.isSelected}
        read={this.read}
      />
    </div>
    )
  }
}

export default App
