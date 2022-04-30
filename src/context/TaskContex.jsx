import { createContext, useReducer } from "react";
import { appReducer } from "./AppReducer";

const initialState = {
    tasks: [
        {
            id:"1",
            title: "one",
            description: "some description",
            done: false
        },
        {
            id:"2",
            title: "two",
            description: "some",
            done: false
        }
    ]
}

export const TaskContext = createContext(initialState);

export const TaskProvider = ({children}) => {

    const [state, dispatch] = useReducer(appReducer, initialState);

    const addTask = (task) => {
        dispatch({type: 'ADD_TASK', payload: task});
    }
    const deleteTask = (task) => {
        dispatch({type: 'DELETE_TASK', payload: task});
    }

    const updateTask = (task) => {
        dispatch({type: 'DELETE_TASK', payload: task});
    }

    const toggleTaskDone = (id) => {
        dispatch({type: 'TOGGLE_DONE', payload: id});
    }
    return (
        <TaskContext.Provider value={{
            ...state,
            addTask,
            deleteTask,
            updateTask,
            toggleTaskDone    
        }}>
            {children}
        </TaskContext.Provider>
    )
}