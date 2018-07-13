import React, { Component } from 'react'
import Message from './Message'

const MessageList = (props) => {
  let mapList = props.list.map((x, i) => <Message key={ i } message={ x } isStarred = {props.isStarred } isSelected={props.isSelected}/>)

  return(
    <div>
      { mapList }
    </div>
  )
}


export default MessageList
