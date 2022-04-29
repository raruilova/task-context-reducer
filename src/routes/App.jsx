import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Layout from "../layout/Layout";
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/add" element={<TaskForm />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;