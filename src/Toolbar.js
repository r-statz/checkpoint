import React, { Component } from 'react'


const Toolbar = ({
  remove,
  read,
  selectAll,
  everySomeNone,
  isSelected,
  toggle
}) => {

return (
  <div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">2</span>
        unread messages
      </p>

      <button className="btn btn-default" onClick={ selectAll }>
        <i className={`${everySomeNone()}`}></i>
      </button>

      <button id="read" className="btn btn-default" disabled={`${toggle() ? "" : "disabled"}`} onClick={ read }>
        Mark As Read
      </button>

      <button id="unread" className="btn btn-default" disabled={`${toggle() ?  "" : "disabled"}`} onClick={ read }>
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
        <i className="fa fa-trash-o" onClick={ remove }></i>
      </button>
    </div>
  </div>
)

}


export default Toolbar
