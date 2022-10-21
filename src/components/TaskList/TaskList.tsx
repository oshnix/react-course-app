import React, {useState} from "react";

interface ITask {
    name: string;
}

const initialTasksList: Array<ITask> = [
    { name: 'Create component' },
    { name: 'Add props' },
    { name: 'Add event handler' },
    { name: 'Profit' },
];

function useTaskListState() {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState(initialTasksList);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            setTasks([...tasks, {name: inputValue}]);
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
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}
