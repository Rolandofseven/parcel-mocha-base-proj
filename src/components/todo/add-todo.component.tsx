import * as React from 'react';
import { useStoreActions } from '../../hooks';

export default function AddTodo() {
    const addTodo = useStoreActions(actions => actions.todos.addTodo);

    const [text, setText] = React.useState('');
    const onButtonClick = React.useCallback(() => {
        addTodo(text);
        setText('');
    }, [addTodo, setText, text]);

    return (
        <>
            <h3>Add Todo</h3>
            <input value={text} onChange={e => setText(e.target.value)} type="text" />
            <button onClick={onButtonClick}>Add</button>
        </>
    );
}
