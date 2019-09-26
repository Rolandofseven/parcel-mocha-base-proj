import * as React from 'react';
import { useStoreState } from '../../hooks';
import "./todo.styles.scss";

export default function TodoList() {
    const todos = useStoreState(state => state.todos.items);
    return (
        <div>
            <h2 className="todo">Todos</h2>
            <ul>
                {todos.map((todo, idx) => (
                    <li key={idx}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
