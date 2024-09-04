const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return (
    <>
      {/* Update Task */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              value={updateData ? updateData.title : ''}
              onChange={(e) => changeTask(e)}
              className="form-control"
              placeholder="Update task"
            />
            <div className="input-group-append">
              <button
                onClick={updateTask}
                className="btn btn-warning mx-2"
              >
                Update
              </button>
              <button
                onClick={cancelUpdate}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateForm;
