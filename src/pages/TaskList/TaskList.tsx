import React, {useContext, useState} from "react";
import {TasksListContext} from "../../api/tasks";
import {Link} from "react-router-dom";

function useTaskListState() {
    const [inputValue, setInputValue] = useState('');
    const tasks = useContext(TasksListContext);
    // const [tasks, setTasks] = useState(initialTasksList);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            // setTasks([...tasks, {name: inputValue}]);
            setInputValue('');
        }
    }

    return { inputValue, tasks, onChange, onKeyDown };
}


export function TaskList () {
    const { tasks, onKeyDown, onChange, inputValue } = useTaskListState();

    return (
        <>
            <input value={inputValue} onChange={onChange} onKeyDown={onKeyDown} />
            <ul>
                {tasks.map(item => (
                    <li key={item.name}>
                        <Link to={`/tasks/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
