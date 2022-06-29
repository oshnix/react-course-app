import {FormEvent, useCallback, useState} from "react";

interface ITaskForm {
    onTaskAdd: (taskName: string) => void;
}

export function TaskForm({ onTaskAdd }: ITaskForm) {
    const [name, setName] = useState("");

    const onSubmit = useCallback((event: FormEvent) => {
        event.preventDefault();
        onTaskAdd(name);
        setName("");
    }, [onTaskAdd, setName, name]);

    return (
        <form onSubmit={onSubmit}>
            <input name="taskName" value={name} onChange={(event) => setName(event.target.value)} />
            <button type="submit">Add task</button>
        </form>
    )
}