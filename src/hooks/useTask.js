import { useContext } from "react"
import { TaskContext } from "../context/TaskContex"

const useTask = () => {
    return useContext(TaskContext);
}

export default useTask;