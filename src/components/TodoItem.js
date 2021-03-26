import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const {
      id,
      title,
      handleTimer,
      handleDelete,
      handleEdit,
      handleDoneTask,
      completed,
    } = this.props;

    return (
      <li className="list-group-item d-flex justify-content-between my-2 shadow-lg p-3 mb-1 bg-black rounded over">
        <h6
          className={`mt-1 mb-0 align-middle text-break ${
            completed
              ? "completed-task" /* BOOTSTRAP snippet from https://bootsnipp.com/snippets/6X14d*/
              : ""
          }`}
        >
          {title}
        </h6>
        <div className="todo-icon">
          <span
            className={`mx-2 ${completed ? "text-success" : "text-secondary"}`}
            onClick={() => handleDoneTask(id)}
          >
            <i
              className={`${
                completed ? "far fa-check-square" : "far fa-square"
              }`}
            />
          </span>
          <span className="mx-2 text-primary" onClick={handleTimer}>
            <i className="fas fa-clock" />
          </span>
          <span className="mx-2 text-warning" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
