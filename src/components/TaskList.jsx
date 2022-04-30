import { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContex";

const TaskList = () => {
  const { deleteTask, tasks, updateTask, toggleTaskDone } =
    useContext(TaskContext);
  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {tasks.map((task) => (
          <div
            className="bg-gray-900 px-20 py-5 text-white shadow-2xl mb-4 flex justify-between"
            key={task.id}
          >
            <div>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
              <button className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2" onClick={() => toggleTaskDone(task.id)}>
                {task.done ? "Undone" : "done"}
              </button>
            </div>
            <div>
              <Link
                to={`/edit/${task.id}`}
                className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2 rounded"
                onClick={() => updateTask(task)}
              >
                Edit
              </Link>
              <button
                className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2 rounded"
                onClick={() => deleteTask(task)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
