import { ADD_TASK, DELETE_TASK, TOGGLE_DONE, UPDATE_TASK } from "../../types";

export function appReducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload.id)
            }

        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? action.payload : task)
            }

        case TOGGLE_DONE: 
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload ? {...task, done : !task.done } : task)
            }
    
        default:
            state;
    }
}