import * as React from 'react';
import { render } from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import './styles.css';
import Todos from './components/todo/todos.component';
import AddTodo from "./components/todo/add-todo.component";

import store from './store';
import '../scss/index.scss'

function App() {
    return (
        <StoreProvider store={store}>
            <div className="App">
                <Todos />
                <AddTodo />
            </div>
        </StoreProvider>
    );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
