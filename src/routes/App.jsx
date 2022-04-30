import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Layout from "../layout/Layout";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "../context/TaskContex";

const App = () => {
    return (
        <BrowserRouter>
            <TaskProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<TaskList />} />
                        <Route path="/add" element={<TaskForm />} />
                        <Route path="/edit/:id" element={<TaskForm />} />
                    </Routes>
                </Layout>
            </TaskProvider>
        </BrowserRouter>
    );
};

export default App;
