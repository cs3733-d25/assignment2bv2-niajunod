import { useState, useEffect } from "react";
import { Todo } from "./types.ts";
import { TodoList } from "./components/TodoList.tsx";
import { TodoForm } from "./components/TodoForm.tsx";
import Title from "./components/Title";
import Intro from "./components/Intro";
import Hobby1 from "./components/hobby1.tsx";
import Hobby2 from "./components/hobby2.tsx";
import "./App.css";

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [currentTime, setCurrentTime] = useState<string>("");
    const [currentDate, setCurrentDate] = useState<string>("");

    function onAdd(description: string) {
        const newTodo: Todo = {
            id: Date.now(),
            description: description,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    }

    function handleDelete(id: number) {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    }

    function handleToggle(id: number) {
        setTodos((prevState) =>
            prevState.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        setCurrentTime(`${hours}:${formattedMinutes} ${ampm}`);
    }

    function updateDate() {
        const now = new Date();
        const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
        setCurrentDate(formattedDate);
    }

    useEffect(() => {
        updateTime();
        updateDate();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="app">
            <Title />
            <Intro />
            <p className="date">Today's Date: {currentDate}</p>
            <p className="time">Current Time: {currentTime}</p>
            <Hobby1 />
            <Hobby2 />
        </div>
    );
}