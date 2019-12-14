import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const  {title,handleDelete,handleEdit}=this.props
        return (
            
            <li className="list-group-item text-capitalize d-flex 
            justify-content-between my-2">
               <h6>{title}</h6>
               <div className="todo-icon">
                <span className="mx-2 text-sucess">
                <i className="fas fa-pencil" onClick={handleEdit}/>
                </span>
                <span className="mx-2 text-danger">
                    <i className="fas fa-trash" onClick={handleDelete}/>
                </span>
               </div>
               </li>
        )
    }
}

export default TodoItem;
