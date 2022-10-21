import React from 'react';
import {Counter} from './components/Counter/Counter';
import {Section} from "./components/Section/Section";
import {TaskList} from "./components/TaskList/TaskList";

function App() {
    return (
        <div className="App">
            <Section header="Counters">
                <Counter/>
                <Counter/>
            </Section>
            <Section header="Task list">
                <TaskList/>
            </Section>
        </div>
    );
}

export default App;
