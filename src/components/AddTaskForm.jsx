const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/* Add Task */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="input-group">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="form-control"
              placeholder="Enter a new task"
            />
            <button
              onClick={addTask}
              className="btn btn-success mx-2"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
