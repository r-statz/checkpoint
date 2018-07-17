import React, { Component } from 'react'


const Toolbar = ({
  addLabel,
  dropLabel,
  remove,
  read,
  selectAll,
  everySomeNone,
  isSelected,
  toggle,
  count
}) => {

let counter = count()
// let addLabels = label()

return (
  <div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge" >
          { counter }
        </span>
        unread messages
      </p>

      <button className="btn btn-default" onClick={ selectAll }>
        <i className={`${everySomeNone()}`}>
        </i>
      </button>

      <button id="read" className="btn btn-default" disabled={`${toggle() ? "" : "disabled"}`} onClick={ read } >
        Mark As Read
      </button>

      <button id="unread" className="btn btn-default" disabled={`${toggle() ?  "" : "disabled"}`} onClick={ read }>
        Mark As Unread
      </button>

      <select id="add-label" className="form-control label-select" disabled={`${toggle() ?  "" : "disabled"}`} onChange={ addLabel }>
        <option>Apply label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <select id="remove-label" className="form-control label-select" disabled={`${toggle() ?  "" : "disabled"}`} onChange={ dropLabel }>
        <option>Remove label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <button id="remove" className="btn btn-default" disabled={`${toggle() ?  "" : "disabled"}`}>
        <i className="fa fa-trash-o" onClick={ remove }></i>
      </button>
    </div>
  </div>
)

}


export default Toolbar
