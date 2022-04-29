import { createContext } from "react";

export const TaskContext = createContext({
    tasks: [
        {
            id:"1",
            title: "one",
            description: "some description",
            done: false
        }
    ]
});