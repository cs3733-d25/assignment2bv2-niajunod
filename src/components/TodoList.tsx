import {Todo} from "../types.ts";

type TodoItemsProps = {
    todos: Todo[]
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

export function TodoList({onDelete, onToggle, todos}: TodoItemsProps){
    return (
        <ul className={"todo-list"}>
            {/* for every todo, render a list item */}
            {todos.map(todo => (
                // they key attribute tells react which element to re-render.
                // your code will often work without it, but sometimes you will get very
                // nasty bugs if you do not include it. the key must be unique
                <li className={todo.completed ? "completed" : ""} key={todo.id}>
                    <span onClick={() => onToggle(todo.id)}>{todo.description}</span>
                    <button onClick={() => onDelete(todo.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}