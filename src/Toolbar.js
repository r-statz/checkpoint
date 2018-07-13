import React, { Component } from 'react'


const Toolbar = (props) => {
// console.log(props.list)
return (
  <div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">2</span>
        unread messages
      </p>

      <button className="btn btn-default" onClick={ props.selectAll }>
        <i className={`${props.everySomeNone()}`}></i>
      </button>

      <button className="btn btn-default" disabled={`${props.everySomeNone() === "fa fa-square-o" ? "disabled" : ""}`} onClick={ props.markAsRead }>
        Mark As Read
      </button>

      <button className="btn btn-default" disabled={`${props.everySomeNone() === "fa fa-square-o" ? "disabled" : ""}`} onClick={ props.markAsUnread }>
        Mark As Unread
      </button>

      <select className="form-control label-select" disabled="">
        <option>Apply label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <select className="form-control label-select" disabled="">
        <option>Remove label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <button className="btn btn-default" disabled="">
        <i className="fa fa-trash-o" onClick={ props.delete }></i>
      </button>
    </div>
  </div>
)

}


export default Toolbar
