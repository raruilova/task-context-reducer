import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../context/TaskContex";
import { generateId } from "../helper/generateId";

const TaskForm = () => {
  const [task, setTask] = useState({
    id: generateId(),
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const params = useParams();

  const { addTask, tasks, updateTask } = useContext(TaskContext);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const { title, description } = task;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(params.id) {
        updateTask(task)
    } else {
        addTask(task);
    }
    
    setTask({
      id: generateId(),
      title: "",
      description: "",
    });
    navigate('/');
  };

  useEffect(() => {
     const taskFound = tasks.find((task) => task.id === params.id);
     console.log(params.id);
     console.log(tasks);
    if(taskFound) {
        setTask(taskFound);
        console.log(taskFound);
    }
    console.log(taskFound);
  }, [params.id, tasks]);
  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h2 className="mb-7 text-3xl">{params.id ? 'Update task' : 'Add task'}</h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Write a title"
            onChange={handleChange}
            value={title}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            id="description"
            placeholder="Write a description"
            rows="2"
            onChange={handleChange}
            value={description}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          ></textarea>
        </div>
        <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5 rounded">
        {params.id ? 'Update task' : 'Create task'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
