import {Counter} from "../Counter/Counter";
import classes from './redCounter.module.scss';

export function RedCounter() {
    return (
        <Counter className={classes.redCounter}/>
    )
}