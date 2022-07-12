import {Section} from "./Section";
import {Counter} from "./Counter/Counter";
import {RedCounter} from "./RedCounter/RedCounter";
import {Link} from "react-router-dom";

export function IndexPage() {
    return (
        <Section title="Counters">
            <Link to="/tasks">
                Tasks
            </Link>
            <Counter/>
            <RedCounter/>
        </Section>
    )
}