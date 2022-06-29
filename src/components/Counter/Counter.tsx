import {useState} from "react"
import classes from './counter.module.scss';
import clsx from 'clsx';

interface CounterProps {
    className?: string;
}

export function Counter({ className }: CounterProps) {
    const [state, setState] = useState(0);

    return (
        <button className={clsx(classes.counter, className)} onClick={() => setState(state + 1)}>
            {state}
        </button>
    )
}