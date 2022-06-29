import {Section} from "./Section";
import {Counter} from "./Counter/Counter";
import {RedCounter} from "./RedCounter/RedCounter";

export function IndexPage() {
    return (
        <Section title="Counters">
            <Counter/>
            <RedCounter/>
        </Section>
    )
}