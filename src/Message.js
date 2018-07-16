import React, { Component } from 'react'

const Message = (props) => {

let label = props.message.labels.map((x, i) => <span key={i} className="label label-warning">{ x }</span>)

let starred = "star fa fa-star"
let unstarred = "star fa fa-star-o"

  return (
    <div id= { props.message.id } className={`row message ${props.message.read ? "read" : "unread"} ${props.message.selected ? "selected" : ""}`} >
      <div className="col-xs-1">
        <div className="row" >
          <div className="col-xs-2">
            <input type="checkbox" checked={`${props.message.selected ? "checked" : ""}`} onChange={() => {
            props.isSelected(props.message.id, "selected")}}/>
          </div>
          <div className="col-xs-2" >
            <i className={` ${props.message.starred ? starred : unstarred }`} onClick={() => props.isSelected(props.message.id, "starred")}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        { label }
        <a  >
            { props.message.subject }
        </a>
      </div>
    </div>
  )
}

export default Message
